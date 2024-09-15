import React, { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeNewsItem from "./HomeNewsItem";

const News = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center mx-auto p-4">
      <Link href="/news" className="flex items-center gap-1 text-3xl font-bold">
        News <ArrowRight className="text-green-700" size={26} />
      </Link>
      <div className="w-full flex max-md:flex-col items-start gap-8 justify-between">
        <Suspense fallback={<span>Loading...</span>}>
          <HomeNewsItem />
        </Suspense>
      </div>
    </div>
  );
};

export default News;
