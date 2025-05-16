
<style>
  /* #daydreams { */
  /*   font-size: 17pt; */
  /*   font-weight: bold; */
  /*   color: transparent; */
  /*   padding: 40px; */
  /*   background-clip: text; */
  /*   background-image: linear-gradient(45deg, var(--sky), var(--sapphire), var(--lavender), var(--mauve), var(--blue)); */
  /* } */
  .daydreams-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

</style>
<svelte:head>
	<meta name="theme-color" content="#89dceb">
	<title>aman/blog</title>
</svelte:head>
<div class="daydreams-wrapper">
  <slot />
</div>
