<script>
    let cards = [
        [
            "glowworm",
            "https://github.com/zeffo/glowworm",
            "bias lighting for wayland with adalight",
            "--red",
        ],
        [
            "manzar",
            "https://github.com/zeffo/manzar",
            "a cat that follows your cursor around",
            "--peach",
        ],
        [
            "zeffo.me",
            "https://github.com/zeffo/zeffo.me",
            "this website, made with svelte + cf pages",
            "--yellow",
        ],
        [
            "siren",
            "https://github.com/cmhlp/siren",
            "webscraper suite for the centre for mental health law & policy",
            "--green",
        ],
        [
            "hk",
            "https://github.com/zeffo/HK",
            "star wars themed discord bot that does some cool stuff",
            "--blue",
        ],
    ];
</script>

<svelte:head>
    <meta property="og:description" content="tech stuff" />
    <meta name="theme-color" content="#94e2d5" />
    <title>aman/tech</title>
</svelte:head>

<div class="contents">
    <p class="tech-text">
        This page is more appropriately titled "projects", but that doesn't fit in 4 characters.<br />
        <a href="https://git.zeffo.me/dotfiles" target="_blank" class="link">dotfiles</a>,
        <a href="./cv.pdf" target="_blank" class="link">resume</a>
    </p>
    <div class="cards">
        {#each cards as [title, link, desc, color]}
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                class="card"
                style=" --card-color: var({color});"
            >
                <h1 class="card-title">
                    {title}
                </h1>
                <span class="card-body">
                    {desc}
                </span>
            </a>
        {/each}
    </div>
    <div id="Kit">
    </div>
</div>

<style>

    .link {
        color: var(--blue);
    }
    .link:hover {
        text-shadow: 0 0 5px;
    }

    .cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
        max-width: 1200px;
    }

    div > .card {
        text-decoration: none;
        background-color: var(--mantle);
        color: var(--text);
        border: 1px solid;
        border-radius: 10px;
        max-width: 270px;
        min-height: 120px;
        text-align: left;
        padding: 20px;
        display: flex;
        flex-direction: column;
        border-color: var(--card-color); 
        color: var(--card-color);
        transition: background linear 0.25s;
    }

    .card:hover {
        background-color: var(--card-color);
        color: var(--crust);
    }

    .card:hover > .card-body {
        color: var(--crust);
    }

    .card-title {
        font-size: 30px;
        margin: 0;
        padding: 0;
        color: var(--card-color);
        margin-bottom: 10px;
    }

    .card-body {
        padding: 0 0 5px;
        margin: 0;
    }

    .card:hover > .card-title {
        color: var(--crust);
    }

    .tech-text {
        text-align: center;
        max-width: 800px;
        margin-bottom: 0;
    }

    .contents {
        justify-content: flex-start;
        gap: 50px;
    }


</style>
