export type NavUrls<T> = {
  id: string;
  title: string;
  linkUrl: string;
  subcategory: T[];
};

export type SubCatUrl = { name: string; subCatUrl: string; subCatId: string };

export type Params = {
  [key: string]: string | string[] | undefined;
};

export type CatType = {
  title: string;
  slug: string;
  catId: string;
  subcategory: string;
  posts?: string[];
};

export type PostBlog = {
  title: string;
  category: string;
  postId: string;
  postCat: string;
  slug: string;
  postImage: string;
  nutritions: string[];
  nutritionsImage?: string[];
  descriptions: string[];
  steps: Step[];
  ingredients: Ingredien[];
  nutritionInformations: NutritionInformation[];
  activeInfos: ActiveInfo[];
  nutritionFact: NutritionFact[];
};

type Step = {
  title: string;
  descriptions: string;
  stepImage?: string;
};

type Ingredien = {
  qty: string;
  title: string;
};

type NutritionInformation = {
  nutrition: string;
  amount: string;
  percent: number;
};

type ActiveInfo = {
  activeTime: string;
  totalTime: string;
  servings: string;
};

type NutritionFact = {
  nutriFact: string;
  amount: number;
};

export type ArticleBlog = {
  title: string;
  desc: string;
  slug: string;
  articleID: string;
  subCat: string;
  articlePosts: ISArticle[];
};

type ISArticle = {
  articleTitle: string;
  subarticleTitle: string;
  articleImage: string;
  articleDesc: string;
  articleIngredients: string[];
  articleTotal: string;
};

export type Position = {
  title: string;
  top: number;
  bottom: number;
  left: number;
  right: number;
};
