
<style>
  #daydreams {
    font-size: 16pt;
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

  <div class="daydreams-wrapper">
    <div id="daydreams">daydreams ~</div>
    <slot />
  </div>
