<script>
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
</script>

<Nav />

<slot />

<style>
@font-face { 
    font-family: "Iosevka Pride"; 
    font-display: "swap"; 
    src: url("/font.woff2") format("woff2");
}
</style>

<Footer />
