
<style>
  #daydreams {
    font-size: 17pt;
    font-weight: bold;
    color: transparent;
    padding: 40px;
    background-clip: text;
    background-image: linear-gradient(45deg, var(--text), var(--lavender), var(--sky), var(--sapphire), var(--teal))
  }
  .daydreams-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
<svelte:head>
	<meta name="theme-color" content="#89dceb">
	<title>aman/daydreams</title>
</svelte:head>
<div class="daydreams-wrapper">
  <div id="daydreams">daydreams ~</div>
  <slot />
</div>
