<script>
    export let title;
    export let date;
    export let description;
</script>

<style>
  .blog {
    border-left: 1px solid var(--surface1);
    margin-bottom: 100px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
  }


  .wrap {
    @media (max-width: 800px) {
      max-width: 45ch;
    }
    @media (min-width: 800px) {
      max-width: 80ch;
    }
  }

</style>

<svelte:head>
  <meta property="og:description" content={ description }/>
</svelte:head>

<div class="blog">
  <h1>{ title }</h1>
  <span class="subtext">{ date }</span>
  <div class="wrap">
    <slot />
  </div>
</div>
