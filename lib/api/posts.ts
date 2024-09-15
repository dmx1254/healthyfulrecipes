import { ArticleModel, CategoryType, PostModel } from "../models/posts.models";
import { CategoryModel } from "../models/posts.models";

import { unstable_noStore as noStore } from "next/cache";

import { connectDB } from "../db";
import { ArticleBlog, CatType, PostBlog } from "../type";

connectDB();

export async function getHomePosts(type: string, limitPost: number) {
  try {
    const getPostsHomes = await PostModel.find({
      slug: type,
    }).populate({
      path: "category",
      options: { sort: { createdAt: -1 }, limit: limitPost },
    });

    return getPostsHomes;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getCategoriesPosts(category: string) {
  try {
    const getCategoriesPosts = await CategoryModel.find({
      slug: category,
    });

    return getCategoriesPosts;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createCategory(categoryData: CatType) {
  try {
    await CategoryModel.create(categoryData);
    return {
      message: "Category created successfully",
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createPost(postData: PostBlog) {
  try {
    await PostModel.create(postData);
    return {
      message: "Post created successfully",
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createArticle(articleData: ArticleBlog) {
  try {
    await ArticleModel.create(articleData);
    return {
      message: "Article created successfully",
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getSingleNews(slug: string, slugId: string) {
  noStore();
  try {
    const article = await ArticleModel.findOne({ slug });
    return JSON.parse(JSON.stringify(article));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getThreeLatestNews() {
  noStore();
  try {
    const latestTrheeNews = await ArticleModel.find({
      subCat: "news",
    })
      .sort({ createdAt: -1 })
      .limit(3)
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestTrheeNews));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getThreeLatestLifeStyles() {
  noStore();
  try {
    const latestTrheeNews = await ArticleModel.find({
      subCat: "healthy-lifestyle",
    })
      .sort({ createdAt: -1 })
      .limit(3)
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestTrheeNews));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}


export async function getFiveLatestDiabetes() {
  noStore();
  try {
    const latestTrheeNews = await ArticleModel.find({
      subCat: "diabetes-diet-center",
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestTrheeNews));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getAllNewsSkipFirstThree() {
  noStore();
  try {
    const latestNews = await ArticleModel.find({
      subCat: "news",
    })
      .sort({ createdAt: -1 })
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug")
      .skip(3);

    return JSON.parse(JSON.stringify(latestNews));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
