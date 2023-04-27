<script>
	import Navbar from '../../components/Nav.svelte'
    import Footer from '../../components/Footer.svelte';

    let cards = [
        ['hk', 'https://github.com/zeffo/HK', 'a multipurpose discord bot themed on star wars', "--ctp-mocha-red"],
        ['ambilight', 'https://youtu.be/_VMQRKT320A', 'synchronize monitor colors with an ARGB strip in real time', "--ctp-mocha-peach"],
        ['zeffo.me', '/', 'this website, made with svelte and hosted on cf pages', "--ctp-mocha-yellow"],
        ['periodico', 'https://www.youtube.com/watch?v=BfJffhaNUBo', 'robot to help newspaper vendors cut down on delivery times', "--ctp-mocha-green"],
        ['daksh', 'https://github.com/zeffo/daksh', 'utilities to grab audio from youtube and build music players', "--ctp-mocha-blue"]
    ]

</script>

<Navbar />

<style>
    p {
        text-align: center;
        line-height: 20px;
        padding: 20px;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom:100px;
    }

    .cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
        max-width: 1000px;
    }

    div > .card {
        text-decoration: none;
        background-color: var(--ctp-mocha-base);
        color: var(--ctp-mocha-text);
        border: 4px solid;
        border-radius: 10px;
        width: 250px;
        height: 120px;
        text-align: left;
        padding: 0 20px 30px;
    }

    .card:hover {
        text-shadow: none;
    }

    .card:hover > h1 {
        text-shadow: 0 0 5px;
        text-decoration: underline;
    }

</style>
<div class="container">
    <p>
        ~ projects ~  <br><br>
        (you can also check out my 
        <a href="https://github.com/zeffo">github</a>)
    </p>
    <div class="cards">
        {#each cards as [title, link, desc, color]}
            <a href={link} target="_blank" rel="noreferrer" class="card" style="border-color: var({color})">
                <h1 style="color: var({color})">
                    {title}
                </h1>
                <span>
                    {desc}
                </span>
            </a>
        {/each}
    </div>
</div>

<Footer />
