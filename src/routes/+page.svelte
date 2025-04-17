<script>
    let site_info = [
        ["cursor cat", "https://github.com/zeffo/manzar", "manzar", "--pink"],
        ["cat sprites by", "https://aeshanisingh.com/", "aeshani", "--red"],
        ["source", "https://github.com/zeffo/zeffo.me", "github", "--peach"],
        [
            "colors",
            "https://github.com/catppuccin/catppuccin",
            "catppuccin",
            "--yellow",
        ],
    ];
    let buttons = [
        ["https://zeffo.me", "buttons/button.webp"],
        ["https://neovim.io/", "buttons/neovim.gif"],
        ["https://archlinux.org/", "buttons/archlinux.gif"],
        ["https://kernel.org/", "buttons/linux.gif"],
        ["https://rust-lang.org/", "buttons/rust.png"],
        ["", "buttons/passion.gif"],
        [
            "https://www.technologyreview.com/2024/05/23/1092777/ai-is-an-energy-hog-this-is-what-it-means-for-climate-change/",
            "buttons/antiai.png",
        ],
        ["", "buttons/pride.png"]
    ];
</script>

<svelte:head>
    <meta property="og:description" content=":3" />
    <meta name="theme-color" content="#f5c2e7" />
    <title>aman/home</title>
</svelte:head>

<div class="contents">
    <div class="home-text">
        <p style="text-align: left;">
            Hello there! I'm <aman />.
            <br /><br />
            I like programming and making stuff. <br />
            You can see my work
            <a href="/tech">here</a>. <br /><br />
            I also rescue animals. You can see some of them
            <a href="/cats">here</a>.<br /><br />
            You can contact me on
            <a href="https://discord.com/users/325616103143505932">discord</a>
            or send me an
            <a href="mailto:aman@zeffo.me">email</a>.
        </p>
        <br /><br />
        <span class="site-info">
            <strong> Website Stuff: </strong><br />
            {#each site_info as [field, link, title, color]}
                <span style="color: var({color})">~</span>&nbsp;{field}:
                <a href={link}>{title}</a><br />
            {/each}
        </span>
        <br /><br /><br />
        <div id="buttons" class="container row">
            {#each buttons as [url, image]}
                <a href={url}><img src={image} alt="button" /></a>
            {/each}
        </div>
    </div>
    <div id="webring" class="container row">
        <a href="https://ctp-webr.ing/zeffo/previous">&lt-</a>
        <a href="https://ctp-webr.ing/">catppuccin webring</a>
        <a href="https://ctp-webr.ing/zeffo/next">-&gt</a>
    </div>
</div>

<style>
    .home-text {
        text-align: left;
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

    aman::before {
        content: "Aman";
    }

    .site-info > a {
        color: var(--rosewater);
    }

    #buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 40px;
        align-items: center;
        justify-content: center;
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

    #webring {
        align-self: center;
        justify-self: center;
        gap: 20px;
        margin-bottom: 80px;
    }
    #webring a {
        text-decoration: none;
        color: var(--flamingo);
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
    }
</style>
