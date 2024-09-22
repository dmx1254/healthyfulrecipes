import React from 'react';
import { Skeleton } from '../ui/skeleton';

const MainHealthyRecipes = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center max-sm:mt-0 max-md:mt-8 p-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="max-lg:w-full flex items-start gap-2">
            <Skeleton className="w-[250px] h-[200px]" />
            <div className="flex flex-col items-start gap-2">
              <Skeleton className="h-3 w-[180px]" />
              <Skeleton className="h-6 w-[180px]" />
              <Skeleton className="h-4 w-[180px]" />
              <Skeleton className="h-3 w-[180px]" />
            </div>
          </div>
        ))}
      </div>
  );
}

export default MainHealthyRecipes;
