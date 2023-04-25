<script>
    import Footer from '../../components/Footer.svelte';
    import Nav from '../../components/Nav.svelte';
    const dir = import.meta.glob("/static/animals/*", { as: 'url'});
    let images = [];
    for (let path in dir) {
        path = path.split("/").slice(2).join("/")
        images.push(path);
    };

</script>

<Nav />

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
    }

</style>
<div class="container">
    <p>
        ~ animals ~  <br><br>
        a few of the cats and dogs i've rescued and rehabilitated 
    </p>
    <div class="icons">
        {#each images as image}
            <img src="{image}" class="icon" alt={image}/>
        {/each}
    </div>
</div>

<Footer />