<script>
    let site_info = [
        ["cursor cat", "https://github.com/zeffo/manzar", "manzar", "--red"],
        ["font", "https://github.com/zeffo/iosevka-pride", "iosevka pride", "--peach"],
        ["colors", "https://github.com/catppuccin/catppuccin", "catppuccin", "--yellow"],
    ];
    let buttons = [
        ["https://zeffo.me", "buttons/button.webp"],
        ["https://mudkip.dev", "buttons/mudkip.png"],
        ["https://neovim.io/", "buttons/neovim.gif"],
        ["https://archlinux.org/", "buttons/archlinux.gif"],
        ["https://kernel.org/", "buttons/linux.gif"],
        ["https://rust-lang.org/", "buttons/rust.png"],
        ["https://www.mozilla.org/firefox/", "buttons/firefox.png"],
        ["", "buttons/anythingbutchrome.gif"],
        ["", "buttons/passion.gif"],
    ];

</script>

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

    highlight {
        color: var(--green)
    }

    .site-info {
        color: var(--subtext1)
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
        background: -webkit-linear-gradient(right, var(--pink), var(--mauve), var(--red), var(--maroon), var(--peach), var(--yellow), var(--green), var(--teal), var(--sky), var(--sapphire), var(--blue), var(--lavender));
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 200% auto;
        font-weight: bold;
        text-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
    }

    aman::before {
        content: 'Aman';
    }

    .subtext {
        color: var(--overlay0);
        /* font-size: smaller; */
    }

    .site-info > a {
        color: var(--rosewater);
    }

    #buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 80px;
    }
    #buttons img {
        height: 31px;
        width: 88px;
        image-rendering: pixelated;
    }
    #buttons img:hover {
        opacity: 0.8;
    }

</style>

<svelte:head>
    <meta property="og:description" content=":3" />
	<meta name="theme-color" content="#f5c2e7">
	<title>aman/home</title>
</svelte:head>

<div class="contents">
    <div class="home-text">
        <p style="text-align: left;">
            Hello there! I'm <aman/>. 
            <br><br>
            I like <highlight>programming</highlight> (especially automation and concurrency). <br>
            You can see my work
            <a href="/tech">here</a>. <br><br>
            I also like <highlight>rescuing animals</highlight>. You can see some of them
            <a href="/cats">here</a>.<br><br>
            You can <highlight>contact me</highlight> on <a href="https://discord.com/users/325616103143505932">discord</a> or send me an
            <a href="mailto:aman@zeffo.me">email</a>.
        </p>
        <br><br>
        <span class="site-info">
            <strong> Website Stuff: </strong><br>
            {#each site_info as [field, link, title, color]}
                <span style="color: var({color})">~</span>&nbsp;{field}: <a href={link}>{title}</a><br>
            {/each}
        </span>
        <br><br><br>
        <div id="buttons" class="container row">
            {#each buttons as [url, image]}
                <a href="{url}"><img src="{image}" alt="button"></a>
            {/each}
        </div>
    </div>

</div>

