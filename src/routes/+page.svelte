<script>
    let site_info = [
        ["font", "https://fonts.google.com/specimen/Ubuntu+Mono", "ubuntu mono", "--red"],
        ["colors", "https://github.com/catppuccin/catppuccin", "catppuccin", "--maroon"],
        ["framework", "https://svelte.dev", "svelte", "--peach"],
        ["hosted on", "https://developers.cloudflare.com/pages", "cf pages", "--yellow"]
    ]
</script>

<style>

    aman {
        color: var(--pink)
    }

    aman::before {
        content: 'Aman';
    }

    .home-text {
        text-align: left;
    }

    a {
        color: var(--rosewater)
    }

    highlight {
        color: var(--green)
    }

    .site-info {
        color: var(--subtext1)
    }

    .contents {
        justify-content: flex-start;
    }

</style>

<div class="contents">
    <p class="home-text">
        Hello there! I'm <aman />.
        <br><br>
        I like <highlight>programming</highlight> (especially automation and concurrency). <br>
        you can see my projects
        <a href="/tech">here</a>. <br><br>
        I also like <highlight>rescuing animals</highlight>. You can see some of them
        <a href="/cats">here</a>.<br><br>
        You can <highlight>contact me</highlight> on <a href="https://discord.com/users/325616103143505932">Discord</a> or send me an
        <a href="mailto:aman@zeffo.me">Email</a>.
        <br><br><br>

        <span class="site-info">
            Website Stuff: <br>
            {#each site_info as [field, link, title, color]}
                - {field}: <a href={link} style="color: var({color})">{title}</a><br>
            {/each}
        </span>
    </p>
</div>

