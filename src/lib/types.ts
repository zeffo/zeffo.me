export type Categories = "sveltekit" | "svelte";
export type Sex = "male" | "female";

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

export type Cat = {
  name: string;
  coat: string;
  age: string;
  description: string;
  images: string[];
  records: string[];
  sex: Sex;
  thumbnail: string;
}
