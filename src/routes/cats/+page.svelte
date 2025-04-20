<script>
    const dir = import.meta.glob("/static/animals/*", { query: '?url', import: 'default'});
    let images = [];
    for (let path in dir) {
        path = "/" + path.split("/").slice(2).join("/")
        images.push(path);
    };

</script>

<style>
    p {
        text-align: center;
        line-height: 20px;
        padding: 20px;
    }

    .icons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
        max-width: 1000px;
    }

    .icon {
        border-radius: 50%;
        height: 100px;
        width: 100px;
        object-fit: cover;
        border: solid 2px;
        transition: transform 0.3s;
    }

    .icon:hover {
        z-index: 2;
        transform: scale(2);
        border-color: var(--pink);
    }

    .contents {
        justify-content: flex-start;
        gap: 50px;
        padding-bottom: 100px;
    }

    .text-cats {
        text-align: left;
        max-width: 800px;
        margin: 0;
        padding-bottom: 0;
    }

</style>

<svelte:head>
    <meta property="og:description" content="rescue cats" />
	<meta name="theme-color" content="#cba6f7">
	<title>aman/cats</title>
</svelte:head>

<div class="contents">
    <p class="text-cats">
         a few of the animals I've rescued and rehomed ~ <br><br>
        <span style="color: var(--overlay1)">(definitely a cat person)</span>
    </p>
    <div class="icons">
        {#each images as image}
            <img src="{image}" class="icon" alt={image} title={image.split("/")[2].split(".")[0]}/>
        {/each}
    </div>
</div>
