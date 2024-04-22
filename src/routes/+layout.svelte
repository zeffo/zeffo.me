<script>
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
</script>

<Nav />

<slot />

<Footer />

<style>

@font-face {
  font-family: "Iosevka Pride";
  src: url("/font.woff2") format("woff2");
  font-display: "swap";
}
</style>
