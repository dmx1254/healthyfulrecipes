import React from "react";
import { Skeleton } from "../ui/skeleton";

const DetailPageSkeleton = () => {
  return (
    <div className="font-poppins w-full max-w-7xl flex flex-col items-center justify-center mx-auto p-4 my-6 sm:my-12">
      <div className="flex flex-col items-start max-w-3xl gap-4">
        <div className="w-full">
          <Skeleton className="h-10 w-3/4" />
        </div>

        <div className="w-full inline-flex items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-5" />
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        <div className="text-xs inline-flex gap-1 items-center">
          <Skeleton className="h-4 w-1/4" />
        </div>

        <div className="w-full max-w-[600px] my-2">
          <Skeleton className="w-full h-64" />
        </div>

        <div className="w-full max-w-[600px] flex flex-col items-start p-4 bg-[#E4F1EF]">
          <div className="w-full flex items-center gap-4 pb-4 border-b border-gray-300">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="w-full max-w-[600px] flex flex-col gap-2 items-start pt-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>

        <div className="w-full max-w-[600px] flex flex-col items-start my-8">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>

        <div className="w-full max-w-[600px] flex flex-col items-start gap-4">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
