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
  // noStore();
  try {
    const article = await ArticleModel.findOne({ slug });
    return JSON.parse(JSON.stringify(article));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getThreeLatestNews() {
  // noStore();
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
  // noStore();
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
  // noStore();
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
  // noStore();
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

export async function getSingleArticle(slug: string, slugId: string) {
  // noStore();
  try {
    const article = await ArticleModel.findOne({ slug });
    return JSON.parse(JSON.stringify(article));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

// export async function getPostId() {
//   try {
//     const mealPlansID = await PostModel.find({
//       category: "66e44e681aaa31356368db62",
//     }).select("_id");
//     return JSON.parse(JSON.stringify(mealPlansID));
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getLastThreePostByUsingCat(slug: string, lim: number) {
  try {
    const threeLatestPost = await CategoryModel.findOne({
      slug: slug,
    }).populate({
      path: "posts",
      options: { limit: lim },
    });
    const articles = threeLatestPost.posts;
    const posts = JSON.parse(JSON.stringify(articles));
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getSinglePost(slug: string, slugId: string) {
  // noStore();
  try {
    const post = await PostModel.findOne({ slug });
    return JSON.parse(JSON.stringify(post));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
