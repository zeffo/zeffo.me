<script>
  export let name;
  export let description;
  export let images;
</script>

<svelte:head>
  <meta property="og:title" content={name} />
  <meta property="og:description" content={description} />
</svelte:head>

<div class="adoption container column">
  <h1>{name}</h1>
  <!-- <span class="adoption-date">{date}</span> -->
  <p> {description} </p>
  <a href="/adopt" id="Adopt">
    adopt me!
  </a>
  <div class="container row" id="Images">
    {#each images as item}
      <img src={item} alt="image of {name}" />
    {/each}
  </div>
  <div class="wrap">
    <slot />
  </div>
</div>

<style>

p {
  margin: 0;
}

#Adopt {
  border-radius: 5px;
  border: 1px solid var(--crust);
  background: linear-gradient(var(--pink), var(--red), var(--peach));
  color: var(--crust);
  text-decoration: none;
  padding: 2px 5px;
}

.adoption {
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

#Images {
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
 
#Images > img {
  border-radius: 5px;
  border: 1px solid var(--crust);
  height: 300px;
}

h1 {
  color: var(--peach);
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 0 0 15px var(--peach);
  margin: 0;
}

</style>


