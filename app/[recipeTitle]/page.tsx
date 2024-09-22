import React, { Suspense } from "react";
import { Params } from "@/lib/type";

import SinglePost from "@/components/SinglePost";
import DetailPageSkeleton from "@/components/skelettons/DetailPageSkeleton";

const RecipeDetailPage = async ({ params }: { params: Params }) => {
  const newsSlug = params.recipeTitle || "";
  const slug = newsSlug.split("-").slice(0, -1).join("-");
  const slugId = newsSlug.split("-").slice(-1).join();
  return (
    <Suspense key={slug + slugId} fallback={<DetailPageSkeleton />}>
      <SinglePost slug={slug} slugId={slugId} />
    </Suspense>
  );
};

export default RecipeDetailPage;
