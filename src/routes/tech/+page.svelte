<script>

    let cards = [
        ['ambilight', 'https://youtu.be/_VMQRKT320A', 'synchronize monitor colors with an ARGB strip in real time', "--peach"],
        ['manzar', 'https://github.com/zeffo/manzar', 'a cat that follows your cursor around, written in rust', "--red"],
        ['zeffo.me', 'https://github.com/zeffo/zeffo.me', 'this website, made with svelte and hosted on cf pages', "--yellow"],
        ['hk', 'https://github.com/zeffo/HK', 'star wars themed discord bot that does some cool stuff. probably my first ever python project', "--green"],
        ['dotfiles', 'https://github.com/zeffo/dotfiles', 'my arch (hyprland) rice dotfiles, screenshots included', "--mauve"],
        ['periodico', 'https://www.youtube.com/watch?v=BfJffhaNUBo', 'robot to help newspaper vendors cut down on delivery times (very old)', "--blue"],
        ['webasi', 'https://github.com/zeffo/webasi', 'exhibition website for the art society of india', "--teal"]
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
        transition: transform 0.3s;
    }

    .card:hover {
        text-shadow: none;
        transform: scale(1.18); 
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
        margin-bottom: 0;
    }

    .contents {
        justify-content: flex-start;
        gap: 50px;
    }

</style>

<div class="contents">
    <p class="tech-text">
        ♥  python, rust, linux ♥  <br>
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
