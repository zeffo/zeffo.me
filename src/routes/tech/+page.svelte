<script>
    let cards = [
        [
            "glowworm",
            "https://github.com/zeffo/glowworm",
            "bias lighting for wayland with adalight",
            "--peach",
        ],
        [
            "manzar",
            "https://github.com/zeffo/manzar",
            "a cat that follows your cursor around",
            "--red",
        ],
        [
            "zeffo.me",
            "https://github.com/zeffo/zeffo.me",
            "this website, made with svelte and hosted on cf pages",
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
            "--mauve",
        ],
        [
            "periodico",
            "https://www.youtube.com/watch?v=BfJffhaNUBo",
            "robot to help newspaper vendors cut down on delivery times",
            "--blue",
        ],
        [
            "webasi",
            "https://github.com/zeffo/webasi",
            "exhibition website for the art society of india",
            "--teal",
        ],
        [
            "dotfiles",
            "https://github.com/zeffo/dotfiles",
            "i use arch btw (very messy dotfiles)",
            "--sky",
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
        python, rust, linux &lt3 <br />
        <a href="./cv2.pdf" target="_blank" class="resume">~ view resume</a>
    </p>
    <div class="cards">
        {#each cards as [title, link, desc, color]}
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                class="card"
                style="border-color: var({color}); color: var({color})"
            >
                <h1 style="color: var({color})" class="card-title">
                    {title}
                </h1>
                <span class="card-body">
                    {desc}
                </span>
            </a>
        {/each}
    </div>
</div>

<style>
    .cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
        max-width: 1000px;
        padding-bottom: 100px;
    }

    div > .card {
        text-decoration: none;
        background-color: var(--mantle);
        color: var(--text);
        border: 4px solid;
        border-radius: 10px;
        max-width: 230px;
        min-height: 120px;
        text-align: left;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card:hover {
        text-shadow: none;
        box-shadow: 0 0 40px;
    }

    .card-title {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }

    .card-body {
        padding: 0 0 5px;
        margin: 0;
    }

    .card:hover > h1 {
        text-shadow: 0 0 4px;
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

    .resume {
        color: var(--blue);
    }
    .resume:hover {
        text-shadow: 0 0 5px;
    }
</style>
