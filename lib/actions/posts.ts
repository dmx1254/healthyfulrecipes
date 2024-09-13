"use server";

import { createArticle, createCategory, createPost } from "../api/posts";
import { ArticleBlog, CatType, PostBlog } from "../type";

export async function createNewCat(data: CatType) {
  try {
    const response = await createCategory(data);
    return JSON.parse(JSON.stringify(response));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createNewPost(data: PostBlog) {
  try {
    const response = await createPost(data);
    return JSON.parse(JSON.stringify(response));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createNewArticle(data: ArticleBlog) {
  try {
    const response = await createArticle(data);
    return JSON.parse(JSON.stringify(response));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
