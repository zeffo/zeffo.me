<script lang="ts">
  export let data;
</script>

<svelte:head>
  <meta property="og:description" content="blog ~" />
</svelte:head>

<!-- Posts -->
<section>
  <div class="posts">
    {#each data.posts as post}
      <a class="link" href="/blog/{post.slug}">
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 30px;
    flex-wrap: wrap;
    /* max-width: 1000px; */
  }
  .post {
    max-width: 350px;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    padding: 15px 15px 0 15px;
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      var(--sky),
      var(--blue),
      var(--mauve),
      var(--pink),
      var(--sky),
      var(--blue),
      var(--mauve),
      var(--pink)
    );
    @media (min-width: 800px) {
      background-size: 200%;
    }
    @media (max-width: 800px) {
      background-size: 400%;
    }
    background-attachment: fixed;
    transition: background 1s;
  }
  .link .post > * {
    color: var(--base);
  }
  .link:hover > .post {
    background-size: 100%;
    background-position: 100%;
  }

  .link {
    text-decoration: none;
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
