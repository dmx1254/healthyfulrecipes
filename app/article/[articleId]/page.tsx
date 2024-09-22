import ArticlePage from "@/components/ArticlePage";
import ArticleSinglePage from "@/components/ArticleSinglePage";
import ArticleDetailSkeleton from "@/components/skelettons/ArticleDetailSkeleton";
import { Params } from "@/lib/type";
import React, { Suspense } from "react";

const SingleArticlePage = async ({ params }: { params: Params }) => {
  const newsSlug = params.articleId || "";
  // console.log(newsSlug);
  const slug = newsSlug.split("-").slice(0, -1).join("-");
  const slugId = newsSlug.split("-").slice(-1).join();
  // console.log(slug);
  // console.log(slugId);
  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-7xl mx-auto">
      <Suspense key={slug + slugId} fallback={<ArticleDetailSkeleton />}>
        <ArticleSinglePage slug={slug} slugId={slugId} />
      </Suspense>
    </div>
  );
};

export default SingleArticlePage;
