"use server";

import { revalidatePath } from "next/cache";
import {
  addReviewToPost,
  createArticle,
  createCategory,
  createPost,
  subscribeNewsLetter,
} from "../api/posts";
import {
  ArticleBlog,
  CatType,
  NewsLetter,
  PostBlog,
  ReviewRate,
} from "../type";

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

export async function addPostReview(review: ReviewRate) {
  try {
    const response = await addReviewToPost(review);
    if (response) {
      revalidatePath(`/${response.slug}-${response.postId}`);
      return response;
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

// Newsletter

export async function signUpNewsLetter(data: NewsLetter) {
  try {
    const response = await subscribeNewsLetter(data);
    if (response) {
      return response;
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
