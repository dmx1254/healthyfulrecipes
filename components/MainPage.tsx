import React, { Suspense } from "react";
import Link from "next/link";
import MainHeroSinglePost from "./MainHeroSinglePost";
import MainFourArticles from "./MainFourArticles";
import { MainSkeleton } from "./skelettons/MainSkeleton";
import { MainFourSkelet } from "./skelettons/MainFourSkelet";

const MainPage = () => {
  return (
    <div className="w-full flex items-start max-w-6xl max-lg:flex-col gap-8">
      <Suspense fallback={<MainSkeleton />}>
        <MainHeroSinglePost />
      </Suspense>
      <div className="flex max-lg:w-full max-lg:max-w-[700px] max-lg:self-center flex-col items-start gap-2 max-md:p-4">
        <h2 className="relative text-3xl italic text-black/95 thelatest-title mb-2">
          The Latest
        </h2>

        <Suspense fallback={<MainFourSkelet />}>
          <MainFourArticles />
          <Link
            href="/article"
            className="self-center border text-sm border-[#016646] py-2 px-4 text-center text-black font-semibold transition duration-200 ease-in-out hover:bg-[#016646] hover:text-white mt-0 lg:mt-2"
          >
            See More Articles
          </Link>
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
