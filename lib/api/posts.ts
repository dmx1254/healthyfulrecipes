import { ArticleModel, CategoryType, PostModel } from "../models/posts.models";
import { CategoryModel } from "../models/posts.models";

import { unstable_noStore as noStore } from "next/cache";

import { connectDB } from "../db";
import { ArticleBlog, CatType, PostBlog, ReviewRate } from "../type";

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
    // throw new Error(error);
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
    // throw new Error(error);
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
    // throw new Error(error);
  }
}

export async function createPost(postData: PostBlog) {
  try {
    const categoryId = postData.category;
    const post = await PostModel.create(postData);
    const savedPost = JSON.parse(JSON.stringify(post));
    const postId = savedPost._id;
    await CategoryModel.findByIdAndUpdate(
      categoryId,
      {
        $push: { posts: postId },
      },
      {
        new: true,
      }
    );
    return {
      message: "Post created successfully",
    };
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
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
    // throw new Error(error);
  }
}

export async function getSingleNews(slug: string, slugId: string) {
  // noStore();
  try {
    const article = await ArticleModel.findOne({ slug });
    return JSON.parse(JSON.stringify(article));
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
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
      .select("desc")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestTrheeNews));
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
  }
}

export async function getThreeLatestArticles() {
  // noStore();
  try {
    const latestTrheeArticles = await ArticleModel.find({
      subCat: { $ne: "news" },
    })
      .sort({ createdAt: -1 })
      .limit(3)
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("desc")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestTrheeArticles));
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
  }
}

export async function getNewsAfterThree() {
  // noStore();
  try {
    const latestTrheeNews = await ArticleModel.find({
      subCat: "news",
    })
      .sort({ createdAt: -1 })
      .skip(3)
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("desc")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestTrheeNews));
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
  }
}

export async function getArticlesAfterThree() {
  // noStore();
  try {
    const latestArticles = await ArticleModel.find({
      subCat: { $ne: "news" },
    })
      .sort({ createdAt: -1 })
      .skip(3)
      .select("_id")
      .select("imageArt")
      .select("title")
      .select("desc")
      .select("createdAt")
      .select("updatedAt")
      .select("articleID")
      .select("slug");

    return JSON.parse(JSON.stringify(latestArticles));
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
  }
}

export async function getMealsPlansAfterThree(slug: string) {
  try {
    const latestTrheeMealPlans = await CategoryModel.findOne({
      slug: slug,
    }).populate({
      path: "posts",
      options: { skip: 3 },
    });
    const articles = latestTrheeMealPlans.posts;
    const posts = JSON.parse(JSON.stringify(articles));
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
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
    // throw new Error(error);
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
    // throw new Error(error);
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
    // throw new Error(error);
  }
}

export async function getSingleArticle(slug: string, slugId: string) {
  // noStore();
  try {
    const article = await ArticleModel.findOne({ slug });
    return JSON.parse(JSON.stringify(article));
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
  }
}

export async function getPostId() {
  try {
    const mealPlansID = await PostModel.find({
      category: "66e5a083026646bb9e5dbf1f",
    }).select("_id");
    return JSON.parse(JSON.stringify(mealPlansID));
  } catch (error) {
    console.log(error);
  }
}

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
    // throw new Error(error);
  }
}

export async function getLastSixRecipesPost(slug: string, lim: number) {
  try {
    const threeLatestPost = await CategoryModel.findOne({
      slug: slug,
    }).populate({
      path: "posts",
      options: { limit: lim },
    });
    const newPosts = threeLatestPost.posts;
    const posts = JSON.parse(JSON.stringify(newPosts));
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function addReviewToPost(review: ReviewRate) {
  try {
    const post = await PostModel.findByIdAndUpdate(
      review.postID,
      {
        $push: {
          reviews: {
            fullname: review.fullName,
            message: review.message,
            rating: review.rating,
          },
        },
      },
      {
        new: true,
      }
    );
    return {
      slug: post.slug,
      postId: post.postId,
      message: "Thank you for adding a comment.!",
    };
  } catch (error: any) {
    console.log(error);
    // throw new Error(error);
  }
}

export async function getOneRandomPost() {
  try {
    const randomPost = await PostModel.aggregate([
      {
        $sample: { size: 1 },
      },
    ]);
    return JSON.parse(JSON.stringify(randomPost));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getFourRandomArticles() {
  try {
    const randomPost = await ArticleModel.aggregate([
      {
        $sample: { size: 5 },
      },
    ]);
    return JSON.parse(JSON.stringify(randomPost));
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
