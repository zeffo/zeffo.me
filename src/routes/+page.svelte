<script>
	import Navbar from '../components/Nav.svelte'
    import Footer from '../components/Footer.svelte';
</script>

<Navbar />

<style>
    p {
        text-align: left;
        line-height: 20px;
        padding: 20px;
        margin-left: 30px;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

</style>
<div class="container">
    <p>  
        ~ hello there! i'm <aman /> ~ <br><br>
        i like programming (especially automation and concurrency). <br>
        you can see my projects 
        <a href="/projects">here</a>. <br><br>
        i also like rescuing animals. you can see some of them 
        <a href="/animals">here</a>. (very cute) <br><br>
        you can contact me on <a href="https://discord.com/users/325616103143505932">discord</a> or send me an
        <a href="mailto:aman@zeffo.me">email</a>.
        <br><br>
        
    </p>
</div>

<Footer />