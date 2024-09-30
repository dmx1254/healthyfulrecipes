import React, { Suspense } from "react";
import { SearchParamsType } from "@/lib/utils";
import SearchForSearchPage from "@/components/SearchForSearchPage";
import { NewsPlansSkeleton } from "@/components/skelettons/NewsPlansSkeleton";
import SearchItem from "@/components/SearchItem";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  //   console.log(searchParams);

  let q = searchParams.q as string;

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto">
      <div className="w-full flex flex-col items-center mx-auto">
        <div className="w-full flex flex-col items-center justify-center self-center bg-[#E4F1EF] px-4 py-8">
          <SearchForSearchPage term={q} />
        </div>
      </div>
      <div className="flex items-center max-sm:flex-col gap-6 mb-14 px-4">
        <Suspense fallback={<NewsPlansSkeleton key={q} />}>
          <SearchItem searchTerm={q} />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchPage;
