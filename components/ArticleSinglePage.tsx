import React from "react";
import ArticlePage from "./ArticlePage";
import { getSingleArticle } from "@/lib/api/posts";
import { ArticleResponse } from "@/lib/type";
import NotFound from "@/app/not-found";

const ArticleSinglePage = async ({
  slug,
  slugId,
}: {
  slug: string;
  slugId: string;
}) => {
  const article: ArticleResponse = await getSingleArticle(slug, slugId);
  if (!article) return <NotFound />;
  return (
    <div>
      <ArticlePage article={article} />
    </div>
  );
};

export default ArticleSinglePage;
