import { ArticleModel, CategoryType, PostModel } from "../models/posts.models";
import { CategoryModel } from "../models/posts.models";

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
