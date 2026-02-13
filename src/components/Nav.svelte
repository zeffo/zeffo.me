<script>
    let pages = [
        ["/", "home"],
        ["/tech", "tech"],
        ["/cats", "cats"],
        ["/blog", "blog"],
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


    @keyframes gradient-text {
        to {
          background-position: 200% center;
        }
    }

    .nav-brand {
        /* animation: gradient-text 5s linear infinite;
        color: transparent;
        background-clip: text;
        background-size: 200% auto;
        background-image: linear-gradient(60deg, var(--pink), var(--pink), var(--flamingo), var(--pink), var(--pink));
        */

        font-size: 35px; 
        color: var(--pink);
        margin-bottom: 10px;
    }

    .nav-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2vh;
    }

    .nav-link {
        font-size: 13pt;
        color: var(--base);
        background-color: var(--mauve);
        text-decoration: none;

        border-radius: 6px;
        padding: 0 10px;

        border: 3px solid var(--crust);
        border-bottom: 5px solid var(--crust);

    }

    .active {
        background-color: var(--pink);
        border-bottom: 3px solid var(--crust);
    }

</style>


<nav id="Nav">
    <h1 class="nav-brand">
        aman
    </h1>
    <div class="nav-links">
        {#each pages as [link, title] }
            <button>
                <a href={link} class="nav-link" class:active="{link === '/'+url.split('/')[1]}">{title}</a>
            </button>
        {/each}
    </div>
</nav>
