---
title: bias lighting & a million acronyms
description: a little bit on glowworm, a wayland bias lighting driver written in rust 
date: "2025-01-23"
categories:
  - rust
  - wayland
published: true
---

---

A few years ago, when I got hooked on ricing linux, I realized that I could no longer use [prismatik](https://github.com/psieg/Lightpack), a wonderful bias lighting program
I was using on windows for a long time - because I wanted to try out wayland.

I figured it would be easy enough to write a simple program that grabbed the screen, did some processing and used the [adalight](https://github.com/adafruit/Adalight/blob/master/Processing/Adalight/Adalight.pde) protocol
to light up an addressable rgb strip. I could not have been more wrong.



## the linux graphics stack

> -> Warning! This is a long, technical section.
> Skip to the [end](https://www.youtube.com/watch?v=r1JjI3HKP88) to see the demo :)

I used to love acronyms. Now I hate acronyms. If you hate acronyms too, I would recommend you stay far away from anything to do with linux graphics.


Let's look at how a frame arrives to your screen for you to enjoy.
Starting with:

### the Display

Our first acronym is KMS (Kernel Mode Setting). This is a method that sets the resolution, refresh rate, color depth, VRR, and other display properties (which are called the display's _mode_).
Userspace applications use the DRM (Direct Rendering Manager), a component of the linux kernel that provides an API for interfacing with the GPU, to perform the modesetting operation and send instructions and data to the GPU.


Each system device (like a GPU) has it's own DRM device, which contain information like the connector (DisplayPort, HDMI, etc), the CRTC (which for the young ones reading this, stands for Cathode Ray Tube Controller),
which is responsible to generate the pixel data for the display by combining inputs, performing scaling and color correction, and framebuffers, which are regions of memory that contain pixel data.

The framebuffer is the _raw_ data. It's scaled and transformed into a _Plane_, which is then sent to the CRTC for blending, color adjustment, etc.
The CRTC also handles timing: if your monitor has a 60Hz refresh rate, then the CRTC will operate 60 times a second.


Framebuffers are pieces of memory and need to be properly managed. GEM (Graphics Execution Manager) helps with that.
GEM Buffer objects are just raw bytes and can be used for storing various stuff like pixel data, textures, firmware, etc. 
They have no associated metadata and GEM has no generic API (except for freeing used buffers)


The linux kernel also has an internal API called dma-buf, or the DMA Buffer Sharing API. DMA (Direct Memory Access) allows hardware (like the GPU) to access system memory without the CPU.
Crucially, this saves CPU cycles, which is important for this project. PRIME (I Have No Idea What This Stands For) is a buffer sharing framework in DRM that uses dmabuf to offload work to the GPU.
dmabufs can be accessed in userspace as file descriptors, which we'll use later on.

### the Window Manager

A window manager is the software responsible for drawing and managing the state of windows, which are graphical interfaces spawned by applications.
The applications are responsible for drawing the content, but the window manager gives you the ability to open, close, move, resize, hide, and show windows. 
It's also responsible for drawing window decorations; like the border, minimize, maximize and close buttons you see at the top right on Windows systems.
There are many types of window managers, but the most popular one is probably the Compositing window manager, which creates a buffer for each window, which are then all composited into a single image and written into the video card's memory.
The composition does not have any specific restrictions, allowing windows to overlap.

### the Display Server

Working closely with the window manager is the Display Server. Together, they form the windowing system. 
The display server is responsible for handling input and output from it's clients and communicating with the rest of the operating system via a Display Server protocol.

There are two popular display server protocols: X11 and Wayland.
X11 is a very old protocol that does not support things like VRR, vsync, separate refresh rates for multiple monitors, etc.
Wayland on the other hand, is a newer protocol that was developed to improve on the shortcomings of X11.
Display servers using the Wayland protocol are called _Wayland compositors_, and they also act as window managers.
There are a lot of popular Wayland compositors, but I chose [hyprland](https://github.com/hyprwm/Hyprland), a dynamic tiling wayland compositor.


*Tiling* refers to it's ability to draw windows and arrange them algorithmically into layouts. 
This means that when a new window is opened, it will automatically arrange itself in the layout, without me needing to drag it with my mouse to where I want it to be.
Not needing to use my mouse is a blessing, since I can keep both my hands on the keyboard for most of the time, which greatly increases my efficiency.
If I need to move or close a window, I can simply use a keybind, which is way faster than using the mouse.


### the GPU

Userspace applications need a way to tell the GPU to render something. This is done via APIs like OpenGL, Vulkan and Direct3D.
You give them textures, shaders, meshes, etc, and they handle rendering.
These APIs talk to the windowing system via interfaces like EGL for OpenGL and WSI for Vulkan. 
Mesa is a popular library that contains implementations of a bunch of these APIs.
Mesa also has an API called GBM (Generic Buffer Manager) which allows you to allocate buffers, independent of hardware (as long as rendering is done by Mesa).

### TL;DR

- A client (application) draws content 
- The content is passed over to the compositor, which composes all the window buffers into a single image
- DRM/KMS sends this image via DisplayPort (or HDMI/DVI/FPDL/VGA if you're old) to the monitor


## Screengrabbing on Wayland

The Wayland screencopy protocol allows clients to ask the compositor to copy screen content onto a buffer.
I'm using [wayland-rs](https://github.com/Smithay/wayland-rs), an excellent crate by smithay to talk to the compositor.

First, we need to have some state to store some objects:
```rust
/// We need to map each LED on the strip
/// to a region on the monitor.
/// This vec stores the coordinates of the top left
/// and bottom right of the capture region of each LED
pub struct LEDConfig {
    leds: Vec<(u16, u16, u16, u16)>
}

/// A dmabuf frame consists of the file descriptor
/// and it's other metadata, like the height and width.
/// Stride, also called Pitch, is the number of bytes per row of pixels. 
/// The format is the DRM fourcc.
struct DmabufFrameInfo {
    /// dmabufs are presented as fds in userspace
    fd: OwnedFd,

    /// other dmabuf metadata
    height: u32,
    width: u32,
    stride: u32,
    format: gbm::Format,
}

/// This state will hold everything else
/// - the screencopy manager which offers requests to start capturing from a source
/// - the factory for creating dmabuf backed WlBuffers
/// - the compositor output geometry (region to capture)
/// - a deque of surfaces which will hold incoming frames for capture
/// - the latest processed pixel data for the serial port to consume
/// - the LED configuration
/// - the GBM GPU Device
pub struct AmbientState {
    screencopy_manager: ZwlrScreencopyManagerV1,
    dma: ZwpLinuxDmabufV1,
    wl_output: WlOutput,
    surfaces: VecDeque<(
        DmabufFrameInfo,
        ZwlrScreencopyFrameV1,
        WlBuffer,
        ZwpLinuxBufferParamsV1,
    )>,
    latest_frame: Option<Vec<u8>>,
    led_config: LEDConfig,
    gbm: gbm::Device<Card>,
}
```

Before we can start screencopying, we need to connect to the wayland server, initialize the event queue and get the global object list.

```rust
use wayland_client::{
  conn::Connection,
  globals::registry_queue_init
};

let conn = Connection::connect_to_env().unwrap();
let (globals, queue) = registry_queue_init(conn).unwrap();

```

The global list allows us to bind to wayland objects like the screencopy manager, dmabuf factory, etc.

```rust
let qh = queue.handle();
let screencopy_manager = globals
    .bind(&qh, 3..=ZwlrScreencopyManagerV1::interface().version, ())
    .unwrap();
```

For every object we bind to, we need to implement the `Dispatch` trait for it on our state.

```rust
impl Dispatch<ZwlrScreencopyManagerV1, ()> for AmbientState {
    fn event(
        _: &mut Self,
        _: &ZwlrScreencopyManagerV1,
        _: <ZwlrScreencopyManagerV1 as Proxy>::Event,
        _: &(),
        _: &Connection,
        _: &QueueHandle<Self>,
    ) {
    }
}
```
While we don't need to handle anything here now, this will be important later when we need to receive screencopy frames.
We also need a way to allocate dmabufs for the screencopy:

```rust
pub struct Card(std::fs::File);

impl AsFd for Card {
    fn as_fd(&self) -> BorrowedFd<'_> {
        self.0.as_fd()
    }
}

impl Card {
    pub fn open(path: &str) -> Self {
        let mut options = std::fs::OpenOptions::new();
        options.read(true);
        options.write(true);
        Card(options.open(path).unwrap())
    }
}

let gpu = Card::open("/dev/dri/renderD128");
let gbm = gbm::Device::new(gpu).unwrap();
```

The /dev/dri/renderD128 file is the render node for the DRM device /dev/dri/card1 (the GPU).
We'll attach this to the state and prepare to receive events from the compositor.
We're all set to start with the screencopy now. 

```rust
queue.blocking_dispatch(&mut state).unwrap(); // receive dispatches from the compositor
let qh = queue.handle();

state
    .screencopy_manager
    .capture_output(1, &state.wl_output, &qh, ()); // use the screencopy manager to capture a frame
```

Calling `capture_output` dispatches a screencopy frame. We'll implement `Dispatch` for it: 
```rust

impl Dispatch<ZwlrScreencopyFrameV1, ()> for AmbientState {
    fn event(
        state: &mut Self,
        frame: &ZwlrScreencopyFrameV1,
        event: <ZwlrScreencopyFrameV1 as Proxy>::Event,
        _: &(),
        _: &Connection,
        qh: &QueueHandle<Self>,
    ) {
        match event {
            zwlr_screencopy_frame_v1::Event::Failed => {}
            zwlr_screencopy_frame_v1::Event::LinuxDmabuf {
                format,
                width,
                height,
            } => {}
            zwlr_screencopy_frame_v1::Event::Buffer {
                format,
                width,
                height,
                stride,
            } => {}
            zwlr_screencopy_frame_v1::Event::Ready { .. } => {}
            _ => (),
        }
    }
}
```

Let's go over the events:
  - Failed: Copying a frame failed
  - LinuxDmabuf: dmabuf parameters for the frame
  - Buffer: shm buffer parameters
  - Ready: Frame is ready for reading

There are two events that give us buffer parameters, but we will only need to use the Dmabuf event.
shm (shared memory) buffers are not useful to us, since we want [zero-copy](https://en.wikipedia.org/wiki/Zero-copy) from the screen capture.
Let's start by creating the gbm buffer object:

```rust
zwlr_screencopy_frame_v1::Event::LinuxDmabuf {
    format,
    width,
    height,
} => {
    let bo = state
      .gbm
      .create_buffer_object::<()>(
          width,
          height,
          gbm::Format::try_from(format),
          gbm::BufferObjectFlags::empty(),
      )
      .unwrap();
}
```

The format is the drm pixel format. One of the popular ones is ARGB8888, which means that each pixel has an A (Alpha), R (Red), G (Green) and B (Blue) component, which use 8 bits each
for a total of 32 bits. With the buffer allocated, we can use it's file descriptor to create the dmabuf parameters and add a plane.
When we add a plane to the params, we pass the dmabuf fd, the plane index, offset, stride/pitch, and hi and lo modifiers.
The stride is the number of bytes per row in the buffer. I have a 1440p monitor, which is 2560*1440 pixels. The stride would be the width of a row (2560) times 32 (the size of each pixel).
The modifiers are used by the DRM AddFB2 ioctl for expressing tiling, compression, etc.
```rust
let owned_fd = bo.fd().unwrap(); // get the dmabuf fd
let fd = owned_fd.as_fd(); // borrow the ownedfd
let params = state.dma.create_params(qh, ());
params.add(fd, 0, 0, bo.stride(), 0, 0); 
```

Now we just need to copy the frame to the buffer and add it to our surfaces.

```rust
frame.copy(&buf);
let frameinfo = DmabufFrameInfo {
    file: owned_fd,
    height,
    width,
    stride: bo.stride(),
    format: gbm::Format::try_from(format),
};
state
    .surfaces
    .push_back((frameinfo, frame.clone(), buf, params));
```

All we have to do now is handle the Ready event. This is when the frame has been copied to the buffer and is ready for reading.

```rust
impl AdalightState {
    fn get_pixel_samples(&self, frameinfo: DmabufFrameInfo) -> Vec<u8> {
        // create an mmap from the dmabuf fd
        let mmap = unsafe { MmapMut::map_mut(&File::from(frameinfo.file)).unwrap() }; 
        // allocate a vec with the number of LEDs in the strip times 3 (for each color component)
        let mut pixels = Vec::with_capacity(self.led_config.leds.len() * 3);
        // the mmap is a flat slice, we iterate over the capture regions and add the color components of our target pixels to hand over to the LED strip
        for (x, y, _, _) in &self.led_config.leds {
            let idx = ((*y as u32 * frameinfo.width + *x as u32) * 4) as usize;
            pixels.push(mmap[idx + 2]);
            pixels.push(mmap[idx + 1]);
            pixels.push(mmap[idx]);
        }
        pixels
    }
}

// ...
zwlr_screencopy_frame_v1::Event::Ready { .. } => {
    let (frameinfo, frame, buffer, params) = state.surfaces.pop_front().unwrap();
    frame.destroy();
    buffer.destroy();
    params.destroy();
    let pixels = state.get_pixel_samples(frameinfo),
    state.latest_frame = Some(pixels);
}
```

## Adalight

The adalight protocol allows us to communicate with a microcontroller over a serial port, and the microcontroller is then able to light up the LED strip.
An adalight packet consists of a header and an array of integers that represent the RGB values for each LED on the strip.
The header consists of a magic word (Ada) and a checksum calculated from the number of LEDs on the strip.
```rust
fn get_header(leds: u16) -> [u8; 6] {
    let num_leds = leds - 1;
    let hi = ((num_leds & 0xFF00) >> 8) as u8;
    let lo = (num_leds & 0xFF) as u8;
    let checksum = hi ^ lo ^ 0x55;
    [b'A', b'd', b'a', hi, lo, checksum]
}
```
We also need to open the serial port:
```rust
fn get_port(leds: u16) -> Box<dyn SerialPort> { 
    let header = get_header(leds);
    let mut port = serialport::new("/dev/ttyACM0", 115200)
        .timeout(60)
        .open()
        .unwrap();
    port.write_data_terminal_ready(true).unwrap(); // assert dtr control
    port.set_flow_control(serialport::FlowControl::Hardware) 
        .unwrap();
    port
}
```

And finally, send the data (if we have a copied frame):
```rust
if let Some(pixels) = state.latest_frame {
  port.write_all(&pixels);
}
```

## 6 months later


[probably the most satisfying project i've done till date.](https://www.youtube.com/watch?v=r1JjI3HKP88) 


---


<span class='subtext'>
  this was a long one. thanks for reading ♥ 
</span>

