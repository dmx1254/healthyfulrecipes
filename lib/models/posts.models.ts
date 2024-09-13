import mongoose, { Schema, Document } from "mongoose";

// Interface for Post document
interface IPost extends Document {
  title: string;
  category: mongoose.Types.ObjectId;
  postId: string;
  postCat: string;
  slug: string;
  postImage: string;
  reviews: {
    fullname: string;
    message: string;
    rating: number;
  }[];
  recipes: string[];
  nutritions: string[];
  nutritionsImage: string[];
  descriptions: string[];
  ingredients: {
    qty: string;
    title: string;
  }[];
  nutritionInformations: {
    nutrition: string;
    amount: string;
    percent: number;
  }[];
  nutritionFact: {
    nutriFact: string;
    amount: number;
  }[];
  activeInfos: {
    activeTime: string;
    totalTime: string;
    servings: string;
  }[];
  steps: {
    title: { type: String; default: "" };
    descriptions: { type: String; default: "" };
    stepImage: { type: String; default: "" };
  }[];
}

interface IArticle extends Document {
  title: string;
  desc: string;
  slug: string;
  articleID: string;
  subCat: string;
  articlePosts: {
    articleTitle: string;
    subarticleTitle: string;
    articleImage: string;
    articleDesc: string;
    articleIngredients: string[];
    articleTotal: string;
  };
}

// Interface for Category document
interface ICategory extends Document {
  title: string;
  catId: string;
  slug: string;
  subcategory: string;
  posts: mongoose.Types.ObjectId[];
}

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  articleID: { type: String, required: true, unique: true },
  subCat: { type: String, required: true },
  articlePosts: [
    {
      articleTitle: { type: String, default: "" },
      subarticleTitle: { type: String, default: "" },
      articleImage: { type: String, default: "" },
      articleDesc: { type: String, default: "" },
      articleIngredients: [{ type: String, default: "" }],
      articleTotal: { type: String, default: "" },
    },
  ],
});

// Schema for Post
const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "category", required: true },
    postId: { type: String, required: true, unique: true },
    postCat: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    postImage: { type: String, required: true },
    reviews: [
      {
        fullname: { type: String, default: "" },
        message: { type: String, default: "" },
        rating: { type: Number, default: 0 },
      },
    ],
    recipes: [{ type: String }],
    nutritions: [{ type: String }],
    nutritionsImage: [{ type: String }],
    descriptions: [{ type: String }],
    ingredients: [
      {
        qty: { type: String, default: "" },
        title: { type: String, default: "" },
      },
    ],
    nutritionFact: [
      {
        nutriFact: { type: String, default: "" },
        amount: { type: Number, default: 0 },
      },
    ],
    nutritionInformations: [
      {
        nutrition: { type: String, default: "" },
        amount: { type: String, default: "" },
        percent: { type: Number, default: 0 },
      },
    ],
    activeInfos: [
      {
        activeTime: { type: String, default: "" },
        totalTime: { type: String, default: "" },
        servings: { type: String, default: "" },
      },
    ],

    steps: [
      {
        title: { type: String, default: "" },
        descriptions: { type: String, default: "" },
        stepImage: { type: String, default: "" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Schema for Category
const CategorySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    catId: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    subcategory: { type: String, default: "" },
    posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
  },
  {
    timestamps: true,
  }
);

// Create models
const PostModel =
  mongoose.models.post || mongoose.model<IPost>("post", PostSchema);
const CategoryModel =
  mongoose.models.category ||
  mongoose.model<ICategory>("category", CategorySchema);
const ArticleModel =
  mongoose.models.article || mongoose.model<IArticle>("article", ArticleSchema);

export { PostModel, CategoryModel, ArticleModel };

export interface CategoryType extends Document {
  title: string;
  catId: string;
  slug: string;
  posts?: mongoose.Types.ObjectId[];
}
