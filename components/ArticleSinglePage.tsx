import React from "react";
import ArticlePage from "./ArticlePage";
import { getSingleArticle } from "@/lib/api/posts";
import { ArticleResponse } from "@/lib/type";

const ArticleSinglePage = async ({
  slug,
  slugId,
}: {
  slug: string;
  slugId: string;
}) => {
  const article: ArticleResponse = await getSingleArticle(slug, slugId);
  return (
    <div>
      <ArticlePage article={article} />
    </div>
  );
};

export default ArticleSinglePage;
