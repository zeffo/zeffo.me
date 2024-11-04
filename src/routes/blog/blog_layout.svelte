<script>
    export let title;
    export let date;
    export let description;
</script>

<style>
  .blog {
    @media (min-width: 800px) {
      padding-left: 30px;
      border-left: 1px solid var(--surface1);
    }
    @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
    }
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;

  }

  .wrap {
    @media (max-width: 800px) {
      max-width: 90vw;
    }
    @media (min-width: 800px) {
      max-width: 60vw;
    }
  }

</style>

<svelte:head>
  <meta property="og:title" content="{ title }" />
  <meta property="og:description" content={ description }/>
</svelte:head>

<div class="blog">
  <h1>{ title }</h1>
  <span class="blog-date">{ date }</span>
  <div class="wrap">
    <slot />
  </div>
</div>
