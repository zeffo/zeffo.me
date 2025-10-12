import { json } from "@sveltejs/kit";
import type { Cat } from "$lib/types";

async function getCats() {
  let posts: Cat[] = [];

  const paths = import.meta.glob("/src/routes/cats/*/*.md", {
    eager: true,
  });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-2)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Cat, "slug">;
      const post = { ...metadata, slug } satisfies Cat;
      post.published && posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return posts;
}

export async function GET() {
  const posts = await getCats();
  return json(posts);
}
