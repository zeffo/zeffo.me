<script>
    let pages = [
        ["/", "me"],
        ["/projects", "projects"],
        ["/animals", "animals"]
    ]
    import { page } from '$app/stores';
    let url = $page.url.pathname;

    function toggle() {
	    window.document.body.classList.toggle('dark-mode');
    }



</script>

<style>
    #Nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        align-items: center;
        margin-top: 10px
    }

    .nav-link {
        font-size: 25px;
        text-decoration: none;
        color: var(--ctp-latte-mauve);
    }

    .active {
        color: var(--ctp-latte-pink);
        text-decoration: underline;
        text-align: center;
    }

    .nav-brand {
        margin-bottom: 0;
        padding: 0;
        text-align: center;
    }


    #Toggler {
        position: absolute;
        right: 5px;
        top: 5px;
        background-color: var(--ctp-latte-pink);
        color: var(--ctp-mocha-base);
        border: 2px solid var(--ctp-mocha-base);
        border-radius: 10px;
    }

    :global(body.dark-mode) button {
        color: var(--ctp-mocha-pink);
        background-color: var(--ctp-mocha-base);
        border-color: var(--ctp-latte-pink);
    }


</style>

<button id="Toggler" on:click={toggle}>
    theme
</button>

<br>

<h1 class="nav-brand">
    aman
</h1>

<div class="container" id="Nav">
    {#each pages as [link, title] }
        <p>
            <a href={link} class="nav-link" class:active="{link === url}">{title}</a>
        </p>
    {/each}
</div>
