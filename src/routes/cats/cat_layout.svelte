<script>
  import Tag from "../../components/Tag.svelte"
  export let name;
  export let coat;
  export let sex;
  export let records;
  export let age;
  export let description;
  export let images;
  export let thumbnail;
</script>

<svelte:head>
  <meta property="og:title" content={name} />
  <meta property="og:description" content={description} />
</svelte:head>

<div class="adoption container column">
  <h1>{name}</h1>
  <p> {description} </p>
  <div class="container row gap-15">
    <img src={thumbnail} alt="image of {name}" class="thumbnail image" />
    <div class="container column" id="Tags">
      <Tag key="age" value={age} color="yellow"></Tag>
      <Tag key="coat" value={coat} color="green"></Tag>
      <Tag key="sex" value={sex} color="blue"></Tag>
    </div>
  </div>
  <h2> Medical Records </h2>  
  <div class="container row">
    {#each records as item}
      <a href="{item[0]}" class="record">{item[1]}</a>
    {/each}
  </div>
  <div class="container row images">
    {#each images as item}
      <img src={item} alt="image of {name}" class="image"/>
    {/each}
  </div>
  <div class="wrap">
    <slot />
  </div>
</div>

<style>

.gap-15 {
  gap: 15px;
}

p {
  margin: 0;
}

#Tags {
  gap: 15px;
  justify-content: center;
}

.adoption {
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

.images {
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
 
.image {
  border-radius: 5px;
  border: 1px solid var(--crust);
  height: 300px;
}

.thumbnail {
  border-radius: 50%;
  object-fit: cover;
  height: 150px;
  width: 150px;
}

h1 {
  color: var(--peach);
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 0 0 15px var(--peach);
  margin: 0;
}

</style>
