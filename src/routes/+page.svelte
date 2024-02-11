<script>
    let site_info = [
        ["font", "https://github.com/protesilaos/iosevka-comfy", "iosevka comfy", "--red"],
        ["colors", "https://github.com/catppuccin/catppuccin", "catppuccin", "--maroon"],
        ["framework", "https://svelte.dev", "svelte", "--peach"],
        ["hosted on", "https://developers.cloudflare.com/pages", "cf pages", "--yellow"]
    ]
</script>

<style>

    .home-text {
        text-align: left;
    }

    a {
        color: var(--blue)
    }

    a:hover {
        text-shadow: 0 0 2px;
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

    @keyframes gradient-text {
        to {
            background-position: 200% center;
        }
    }

    aman {
        animation: gradient-text 3s linear infinite;     
        -webkit-text-fill-color: transparent;
        background: -webkit-linear-gradient(right, var(--pink), var(--mauve), var(--red), var(--maroon), var(--peach), var(--yellow), var(--green), var(--teal), var(--sky), var(--sapphire), var(--blue), var(--lavender));
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 200% auto;
    }

    aman::before {
        content: 'Aman';
    }

</style>

<div class="contents">
    <p class="home-text">
        Hello there! I'm <aman/>.
        <br><br>
        I like <highlight>programming</highlight> (especially automation and concurrency). <br>
        You can see my projects
        <a href="/tech">here</a>. <br><br>
        I also like <highlight>rescuing animals</highlight>. You can see some of them
        <a href="/cats">here</a>.<br><br>
        You can <highlight>contact me</highlight> on <a href="https://discord.com/users/325616103143505932">discord</a> or send me an
        <a href="mailto:aman@zeffo.me">email</a>.
        <br><br><br>

        <span class="site-info">
            Website Stuff: <br>
            {#each site_info as [field, link, title, color]}
                - {field}: <a href={link} style="color: var({color})">{title}</a><br>
            {/each}
        </span>
    </p>
</div>

