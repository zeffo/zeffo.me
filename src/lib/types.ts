export type Categories = "sveltekit" | "svelte";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};

export type Adoption = {
  name: string;
  slug: string;
  description: string;
  date: string;
  published: boolean;
  images: string[];
};

