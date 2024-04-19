---
title: rust, cats and wasm
description: In this post, I go over my Rust journey and my adventures in the world of WebAssembly.
date: "2024-04-19"
categories:
  - rust
published: true
---

I decided to invest in learning rust recently, since I needed a systems lang to even out my skillset.
Coming from a python background, I was excited to not only have access to high-quality tooling like cargo; but also to excellent resources like the Rust Book (and [Jon Gjengset's YouTube channel](https://www.youtube.com/@jonhoo)).
I might have also been a _little_ swayed by the whole blazing fast, fearlessly concurrent, etc. stuff.
In any case, I had a whole lot of fun learning the basics, and I desperately wanted to make something with rust which I wouldn't imagine doing with python.

## Neko

[Neko](<https://en.wikipedia.org/wiki/Neko_(software)>) is a really old open-source cursor-chasing cat application.
I wanted to make something similar to add to this website.

## WASM

WebAssembly is a binary format that runs on a bunch of platforms, meant for high-performance.
Fortunately for me, rust has some amazing tooling for this (eg, wasm-pack).
Unfortunately for me, WASM cannot directly manipulate the DOM, so I was going to end up having a javascript interface.

## Setup

First, we need something to compile rust to wasm. Let's get started by installing wasm-pack:

`cargo install wasm-pack`

Next, we'll create our rust package:

`cargo new --lib manzar`

## Rust (finally)

Let's write a function to initialize our cat sprite;

```rust
use wasm_bindgen::prelude::*;
use web_sys::{HtmlElement, MouseEvent};

#[wasm_bindgen]
pub unsafe fn start() -> Result<(), JsValue> {
    let window = web_sys::window().expect("no window exists.");
    let document = window.document().expect("no document exists.");
    let body = document.body().expect("document does not have a body.");
    let div = document
        .create_element("div")
        .unwrap()
        .dyn_into::<HtmlElement>()?;

    div.set_id("Manzar");
    body.append_child(&div)?;
```

Let's test it out. First, set the crate type to cdylib:

```toml
# cargo.toml
[lib]
crate-type = ["cdylib"]
```

Now, build the package:

`wasm-pack build --target web`

We have a compiled WASM module! Let's see it on our browser.
Make an html file:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Manzar Example</title>
  </head>
  <body>
    <script type="module">
      import init, { start } from "./pkg/manzar.js";
      async function run() {
        await init();
        await start();
      }
      run();
    </script>
  </body>
</html>
```

Start an http server and check out your new div!
Of course, there's no fun in a blank page; let's bring out cat to life.
We'll add some default styles:

```rust
// src/lib.rs
#[wasm_bindgen]
pub unsafe fn start(sprites_path: String) -> Result<(), JsValue> {
    let window = web_sys::window().expect("no window exists.");
    let document = window.document().expect("no document exists.");
    let body = document.body().expect("document does not have a body.");
    let div = document
        .create_element("div")
        .unwrap()
        .dyn_into::<HtmlElement>()?;

    div.set_id("Manzar");

    let styles: [(&str, &str); 7] = [
        ("height", "32px"),
        ("width", "32px"),
        ("top", "16px"),
        ("left", "16px"),
        (
            "background-image",
            &format!("url('{}')", sprites_path.as_str()),
        ),
        ("position", "fixed"),
        ("imageRendering", "pixelated"),
    ];

    for (prop, val) in styles.iter() {
        div.style().set_property(prop, val)?;
    }
    body.append_child(&div)?;
```

Note how we added a parameter to the function: `sprites_path`.
We'll use this to get the path to spriteset.
Build the package and change your HTML accordingly:

```diff
- await start();
+ await start("./kitty.gif");
```

Yay! You should have a cat on your page.
That's all I'll be covering here. To add reactivity to your cat, I would strongly recommend going through [this guide](https://rustwasm.github.io/wasm-bindgen/examples/index.html)
as well as the [manzar source code](https://github.com/zeffo/manzar).

## Results

After 3 weeks of fighting the rust compiler, I got a satisfactory outcome.
![adding and removing & and * at random until rustc is happy](/blog_assets/add_remove_rustc.png)

A reactive cat sprite, complete with scratching and sleeping idle animations!
