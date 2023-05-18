<script>

    let cards = [
        ['ambilight', 'https://youtu.be/_VMQRKT320A', 'synchronize monitor colors with an ARGB strip in real time', "--peach"],
        ['hk', 'https://github.com/zeffo/HK', 'a quirky, star wars themed discord bot made for my friends and I', "--red"],
        ['zeffo.me', 'https://github.com/zeffo/zeffo.me', 'this website, made with svelte and hosted on cf pages', "--yellow"],
        ['periodico', 'https://www.youtube.com/watch?v=BfJffhaNUBo', 'robot to help newspaper vendors cut down on delivery times', "--green"],
        ['daksh', 'https://github.com/zeffo/daksh', 'utilities to grab audio from youtube and build music players', "--blue"]
    ]

</script>

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
        width: 250px;
        height: 120px;
        text-align: left;
        padding: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card:hover {
        text-shadow: none;
    }

    .card-title {
        font-size: 30px;
        margin: 0;
        padding: 0 0 10px;
    }

    .card-body {
        padding-bottom: 20px;
    }

    .card:hover > h1 {
        text-shadow: 0 0 5px;
        text-decoration: underline;
    }

    .tech-text {
        text-align: left;
        max-width: 800px;
    }

    .contents {
        justify-content: flex-start;
        gap: 50px;
    }

</style>

<div class="contents">
    <p class="tech-text">
        I like programming (mostly in python and rust), specifically concurrent programming, automation, databases and a tiny bit of robotics.
    </p>
    <div class="cards">
        {#each cards as [title, link, desc, color]}
            <a href={link} target="_blank" rel="noreferrer" class="card" style="border-color: var({color})">
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
