import ArticlePage from "@/components/ArticlePage";
import { Params } from "@/lib/type";
import React from "react";

const SingleArticlePage = ({ params }: { params: Params }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-7xl mx-auto">
      <ArticlePage />
    </div>
  );
};

export default SingleArticlePage;
