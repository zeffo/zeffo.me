<script>
    let pages = [
        ["/", "home"],
        ["/tech", "tech"],
        ["/cats", "cats"],
        ["/daydreams", "blog"]
    ]

    import { page } from '$app/stores';
    $: url = $page.url.pathname;
</script>

<style>
    #Nav {
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .nav-brand {
        color: var(--pink);
        font-size: 35px;
        margin-bottom: 10px;
    }

    .nav-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .nav-link {
        font-size: 25px;
        color: var(--mauve);
        text-decoration: none;
    }

    .active {
        color: var(--lavender);
        text-decoration: underline;
    }
</style>


<nav id="Nav">
    <h1 class="nav-brand">
        aman
    </h1>
    <div class="nav-links">
        {#each pages as [link, title] }
            <p>
                <a href={link} class="nav-link" class:active="{link === '/'+url.split('/')[1]}">{title}</a>
            </p>
        {/each}
    </div>
</nav>
