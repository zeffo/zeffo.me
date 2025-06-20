<script>
    let site_info = [
        ["source", "https://github.com/zeffo/zeffo.me", "github", "--peach"],
        ["cursor cat", "https://github.com/zeffo/manzar", "manzar", "--pink"],
        ["cat sprites by", "https://aeshanisingh.com/", "aeshani", "--red"],
        [
            "88x31 by",
            "https://daudix.one/",
            "daudix",
            "--mauve",
        ],
    ];
    let buttons = [
        ["https://zeffo.me", "buttons/zeffo.gif"],
        ["https://spelis.r.mrharryw.dev/", "https://spelis.r.mrharryw.dev/buttons/spelis88x31.gif"],
        ["https://daudix.one", "https://daudix.neocities.org/images/buttons/daudix.gif"],
        ["https://neovim.io/", "buttons/neovim.gif"],
        ["", "buttons/pride.png"],
        ["https://archlinux.org/", "buttons/archlinux.gif"],
        ["https://kernel.org/", "buttons/linux.gif"],
        ["https://rust-lang.org/", "buttons/rust.png"],
        [
            "https://www.technologyreview.com/2024/05/23/1092777/ai-is-an-energy-hog-this-is-what-it-means-for-climate-change/",
            "buttons/antiai.png",
        ],
        ["", "buttons/sourcemissing.gif"],
        ["", "buttons/mobilefriendly.gif"],
        ["", "buttons/mlp.webp"]
    ];
    const row_size = 6;
    const gap = 10;
    const content_max_width = (row_size * 88) + (gap * (row_size - 1)); 
</script>

<svelte:head>
    <meta property="og:description" content=":3" />
    <meta name="theme-color" content="#f5c2e7" />
    <title>aman/home</title>
</svelte:head>

<div class="contents" style="max-width: {content_max_width}px">
    <div class="home-text">
        <p style="text-align: left;">
            Hello there! I'm <aman>Aman</aman>.
            <br /><br />
            I like programming and making stuff. <br />
            You can see my work
            <a href="/tech">here</a>. <br /><br />
            I also rehabilitate injured and sick animals. <br />
            You can see some of them
            <a href="/cats">here</a>.
        </p>
        <span class="site-info">
            <strong> Website Stuff: </strong><br />
            {#each site_info as [field, link, title, color]}
                <span style="color: var({color})">~</span>&nbsp;{field}:
                <a href={link}>{title}</a><br />
            {/each}
        </span>
    </div>
    <div id="buttons" class="container row">
        {#each buttons as [url, image]}
            <a href={url}><img src={image} alt="button" /></a>
        {/each}
    </div>
    <div id="webrings" class="container column">
        <div class="webring" id="ctpwebring">
            <a href="https://ctp-webr.ing/zeffo/previous">&lt;-</a>
            <a href="https://ctp-webr.ing/">catppuccin webring</a>
            <a href="https://ctp-webr.ing/zeffo/next">-&gt;</a>
        </div>
        <div class="webring" id="threetwebring"> 
            <a href="https://3t1t.neocities.org/zeffo/previous">&lt;-</a>
            <a href="https://3t1t.neocities.org/">3t1t webring</a>
            <a href="https://3t1t.neocities.org/zeffo/next">-&gt;</a>
        </div>
    </div>
</div>

<style>
    .home-text {
        text-align: left;
        align-self: start;
    }

    a {
        color: var(--blue);
    }

    a:hover {
        text-shadow: 0 0 4px;
    }

    .site-info {
        color: var(--subtext1);
    }

    .contents {
        justify-content: flex-start;
        gap: 30px;
        align-self: center;
        justify-self: center;
        /* max-width: var(--size); */
    }

    @keyframes gradient-text {
        to {
            background-position: 200% center;
        }
    }

    aman {
        animation: gradient-text 3s linear infinite;
        -webkit-text-fill-color: transparent;
        background: -webkit-linear-gradient(
            right,
            var(--pink),
            var(--mauve),
            var(--red),
            var(--maroon),
            var(--peach),
            var(--yellow),
            var(--green),
            var(--teal),
            var(--sky),
            var(--sapphire),
            var(--blue),
            var(--lavender)
        );
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 200% auto;
        font-weight: bold;
        text-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
    }


    .site-info > a {
        color: var(--rosewater);
    }

    #buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    #buttons a {
        height: 31px;
        width: 88px;
    }

    #buttons img {
        height: 31px;
        width: 88px;
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        image-rendering: -webkit-optimize-contrast;
    }
    #buttons img:hover {
        opacity: 0.8;
    }

    #webrings {
        align-self: center;
        justify-self: center;
        margin-bottom: 70px;

        justify-content: center;
        align-items: center;

        gap: 10px;
    }

    #ctpwebring {
        border-radius: 6px;
        background: linear-gradient(45deg, var(--blue), var(--sky), var(--teal), var(--green));
    }

    #threetwebring {
        border-radius: 6px;
        background: linear-gradient(45deg, var(--mauve), var(--pink), var(--red), var(--peach));
    }

    .webring {
        padding: 0 5px;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .webring > a {
        color: var(--crust);
        margin: 0 5px;
        text-decoration: none;
    }

    .webring > a:hover {
        text-shadow: none;
    }
</style>
