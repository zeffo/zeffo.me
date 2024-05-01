<script>
    let links = [
        ["https://discord.com/users/325616103143505932", "discord", "--teal"],
        ["https://github.com/zeffo", "github", "--sky"],
        ["https://www.linkedin.com/in/zeffo", "linkedin", "--sapphire"]
    ];
</script>

<style>

    #Footer {
        /* margin-top: auto; */

        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 100%;
        padding: 25px 0;
        background-color: var(--crust);
        margin-top: 50px;
    }

    .footer-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .footer-link {
        text-decoration: none;
    }

</style>


<footer id="Footer">
    <div class="footer-links">
        {#each links as [link, title, color]}
            <a href={link} class="footer-link" style="color: var({color})">{title}</a>
        {/each}
    </div>
</footer>
