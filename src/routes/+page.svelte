<script>
    let site_info = [
        ["source", "https://github.com/zeffo/zeffo.me", "github", "--peach"],
        ["cursor cat", "https://github.com/zeffo/manzar", "manzar", "--red"],
        ["cat sprites by", "https://aeshanisingh.com/", "aeshani", "--flamingo"],
        ["diver sprites by", "https://friedchaawal.github.io/", "fried", "--pink"],
        [
            "88x31 by",
            "https://daudix.one/",
            "daudix",
            "--mauve",
        ],
    ];
    let buttons = [
        ["https://zeffo.me", "buttons/zeffo.gif"],
        ["https://mooncell07.me", "https://mooncell07.me/88x31s/mooncell07.gif"],
        ["https://daudix.one", "https://daudix.one/badges/badges/daudix.gif"],
        ["https://neovim.io/", "buttons/neovim.gif"],
        ["", "buttons/pride.png"],
        ["https://archlinux.org/", "buttons/archlinux.gif"],

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
            Hello there! I'm <aman>aman</aman>.
            <br /><br />
            I like <a href="/tech">programming</a> and <a href="/dive">scuba diving</a>. <br />
            I also rescue and rehabilitate <a href="/cats">stray animals</a>.
        </p>
        <span class="site-info">
            <h2> website stuff </h2>
            {#each site_info as [field, link, title, color]}
                <span style="color: var({color})">~</span>&nbsp;{field}
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
        <div class="webring" id="scubawebring">
            <a href="https://dive.zeffo.me/zeffo/previous" class="webring-img"><img src="buttons/seadra.webp" alt="scuba webring previous"></a>
            <a href="https://dive.zeffo.me/" class="webring-img"><img src="buttons/helm.webp" alt="scuba webring home"></a>
            <a href="https://dive.zeffo.me/zeffo/next" class="webring-img"><img src="buttons/seadra.webp" style="transform: rotateY(180deg)" alt="scuba webring next"></a>
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

    h2 {
      padding: 0;
      margin: 5px 0;
      text-align: left;
      align-self: start;
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
        justify-content: center;
        align-items: center;

        gap: 30px;
    }

    .webring {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .webring > a {
        color: var(--crust);
        text-decoration: none;
    }

    .webring > a:hover {
        text-shadow: none;
    }

    .webring-img {
        font-size: 0;
    }

    #ctpwebring {
        border-radius: 6px;
        gap: 10px;
        background: linear-gradient(45deg, var(--pink), var(--red), var(--peach));
        border-radius: 6px;
        padding: 0 5px;
    }

    #scubawebring {
        gap: 30px;
    }

    #scubawebring .webring-img {
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        image-rendering: -webkit-optimize-contrast;
    }

    #scubawebring > a:hover {
        filter: drop-shadow(0 0 .25rem var(--yellow));
    }
    
</style>
