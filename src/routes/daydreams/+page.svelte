<script lang="ts">
	export let data
</script>

<svelte:head>
  <meta property="og:description" content="the daydreams blog ~"/>
</svelte:head>

<!-- Posts -->
<section>
	<div class="posts">
		{#each data.posts as post}
		  <a class="link" href="/daydreams/{post.slug}">
			  <div class="post">
				  <span class="title">{post.title}</span>
				  <p class="date">{post.date}</p>
				  <p class="description">{post.description}</p>
			  </div>
      </a>
		{/each}
	</div>
</section>

<style>
.posts {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  padding: 30px;
}
.post {
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0 15px;
  max-width: 350px;
  border-radius: 10px;
  height: 100%;
  background: linear-gradient(45deg, var(--blue), var(--mauve), var(--pink));
  background-size: 200%;
  transition: background 1s 
}
.link .post > * {
  color: var(--base);
}
.link:hover > .post {
  background-position: 100%;
}

.link {
  text-decoration: none;
  flex: 1;
}
.post .title {
  font-size: 18pt;
  text-decoration: none;
  color: var(--crust);
  font-weight: bold;
}
.post .date {
  color: var(--surface1);
  margin: 10px 0;
}
.post .description {
  margin: 0;
}
</style>

