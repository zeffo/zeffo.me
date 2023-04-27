<script>
    let pages = [
        ["/", "me"],
        ["/projects", "projects"],
        ["/animals", "animals"]
    ]
    import { page } from '$app/stores';
    let url = $page.url.pathname;

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
        padding: 5px;
        text-decoration: underline;
        text-align: center;
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
    {#each pages as [link, title] }
        <p>
            <a href={link} class="nav-link" class:active="{link === url}">{title}</a>
        </p>
    {/each}
</div>
