<script>
	import Navbar from '../components/Nav.svelte'
    import Footer from '../components/Footer.svelte';
    let site_info = [
        ["font", "https://fonts.google.com/specimen/Ubuntu+Mono", "ubuntu mono", "--ctp-latte-red"],
        ["colors", "https://github.com/catppuccin/catppuccin", "catppuccin", "--ctp-latte-maroon"],
        ["framework", "https://svelte.dev", "svelte", "--ctp-latte-peach"],
        ["hosted on", "https://developers.cloudflare.com/pages", "cf pages", "--ctp-latte-yellow"]
    ]
</script>

<Navbar />

<style>
    p {
        text-align: left;
        line-height: 20px;
        margin: 0;
        padding: 0;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 30px;
    }

</style>
<div class="container">
    <p>  
        ~ hello there! i'm <aman /> ~ <br><br>
        i like programming (especially automation and concurrency). <br>
        you can see my projects 
        <a href="/projects">here</a>. <br><br>
        i also like rescuing animals. you can see some of them 
        <a href="/animals">here</a>.<br><br>
        you can contact me on <a href="https://discord.com/users/325616103143505932">discord</a> or send me an
        <a href="mailto:aman@zeffo.me">email</a>.
        <br><br><br>
        website stuff: <br>
        {#each site_info as [field, link, title, color]}
            <li>{field}: <a href={link} style="color: var({color})">{title}</a></li>
        {/each}
    </p>
</div>

<Footer />