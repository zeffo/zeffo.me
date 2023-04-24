<script>
    let pages = { "/": "home", "/projects": "projects", "/animals": "animals" };
    import { page } from '$app/stores';
    let url = $page.url.pathname;

</script>

<style>
    #Nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .nav-link {
        color: var(--ctp-latte-pink);
    }

    .active {
        color: var(--ctp-latte-lavender);
    }

    .nav-brand {
        margin-bottom: 0;
        padding: 0;
        text-align: center;
    }

</style>

<h1 class="nav-brand">
    aman
</h1>
<div class="container" id="Nav">
    {#each Object.entries(pages) as [link, title] }
        <p>
            <!-- Please let me know if I can do this in one line, with a ternary or such! -->
            {#if url == link}
                <a href={link} class="nav-link active"> {title} </a>
            {:else}
                <a href={link} class="nav-link"> {title} </a>
            {/if}
        </p>
    {/each}
</div>