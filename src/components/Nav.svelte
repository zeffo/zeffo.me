<script>
    let pages = [
        ["/", "home"],
        ["/tech", "tech"],
        ["/cats", "cats"],
        ["/daydreams", "blog"]
    ]

    import { page } from '$app/stores';
    $: url = $page.url.pathname;
    function toggleTheme() {
        let theme = (document.body.data_theme == 'dark') ? "light" : "dark";
        document.body.className = theme;
        document.body.data_theme = theme;
    }

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
    #ThemeSwitch {
        position: absolute;
        top: 15px;
        right: 15px;
        border-radius: 10px;
        border: 2px solid var(--mantle);
        color: var(--subtext0);
        background-color: var(--surface0);
    }
</style>


<nav id="Nav">
    <button id="ThemeSwitch" on:click={toggleTheme}>
        theme
    </button>
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
