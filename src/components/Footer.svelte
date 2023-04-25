<script>
    let links = [
        ["https://discord.com/users/325616103143505932", "discord", "--ctp-mocha-lavender"],
        ["https://github.com/zeffo", "github", "--ctp-mocha-sky"],
        ["https://twitter.com/zeffonian", "twitter", "--ctp-mocha-teal"]
    ];
</script>


<style>

    footer {
        width: 100%;
        height: 70px;

        background-color: var(--ctp-mocha-mantle);
        color: var(--ctp-mocha-pink);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        position: fixed;
        bottom: 0;
    }

    .footer-links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

</style>

<footer>
    <div class="footer-links">
        {#each links as [link, title, color]}
            <a href={link} style="color: var({color})">{title}</a>
        {/each}
    </div>
</footer>

