export type NavUrls<T> = {
  id: string;
  title: string;
  linkUrl: string;
  subcategory: T[];
};

export type SubCatUrl = { name: string; subCatUrl: string; subCatId: string };

export type Params = {
  [key: string]: string | undefined;
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
  perServing: string;
  nutritions: string[];
  nutritionsImage?: string[];
  descriptions: string[];
  steps: Step[];
  ingredients: Ingredient[];
  nutritionInformations: NutritionInformation[];
  activeInfos: ActiveInfo[];
  nutritionFact: NutritionFact[];
};

type Step = {
  _id?: string;
  title: string;
  descriptions: string;
  stepImage?: string;
};

type Ingredient = {
  _id?: string;
  qty: string;
  title: string;
};

export type ReviewRate = {
  postID: string;
  message?: string;
  fullName: string;
  rating: number;
};

export type NutritionInformation = {
  _id?: string;
  nutrition: string;
  amount: string;
  percent: number;
};

type ActiveInfo = {
  activeTime: string;
  totalTime: string;
  servings: string;
  prepTime: string;
  yield: string;
};

export type NutritionFact = {
  _id?: string;
  nutriFact: string;
  amount: number;
};

export type ArticleBlog = {
  title: string;
  desc: string;
  slug: string;
  imageArt: string;
  imageDesc: string;
  articleID: string;
  subCat: string;
  articlePosts: ISArticle[];
};

type ISArticle = {
  _id?: string;
  articleTitle: string;
  subarticleTitle: string;
  articleImage: string;
  articleDesc: string;
  articleIngredients: string[];
  articleTotal: string;
  articleSubTitle: SubArtType[];
};

export type ReviewStar = {
  indice: number;
  title: string;
};

type SubArtType = {
  _id?: string;
  title: string;
  description: string;
};

export type Position = {
  title: string;
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type ArticleResponse = {
  _id: string;
  title: string;
  desc: string;
  slug: string;
  imageArt: string;
  imageDesc: string;
  articleID: string;
  subCat: string;
  articlePosts: ISArticle[];
  createdAt: Date;
  updatedAt: Date;
};

export type PostBlogResponse = {
  _id: string;
  title: string;
  category: string;
  postId: string;
  postCat: string;
  slug: string;
  postImage: string;
  perServing: string;
  nutritions: string[];
  nutritionsImage?: string[];
  descriptions: string[];
  steps: Step[];
  reviews: ReviewResponse[];
  ingredients: Ingredient[];
  nutritionInformations: NutritionInformation[];
  activeInfos: ActiveInfo[];
  nutritionFact: NutritionFact[];
  createdAt: Date;
  updatedAt: Date;
};

export type ReviewResponse = {
  _id: string;
  fullName: string;
  message: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface NewsLetter {
  fullName?: string;
  email: string;
  plans: string[];
}
