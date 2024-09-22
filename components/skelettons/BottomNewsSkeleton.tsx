import React from 'react';
import { Skeleton } from '../ui/skeleton';

const BottomNewsSkeleton = () => {
  return (
    <div className="w-full self-center mx-auto my-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index}className="max-sm:w-full flex flex-col items-start gap-4 pt-4">
            <Skeleton className="w-[300px] h-[300px]" />
            <div className="flex flex-col items-start gap-2 p-2">
              <Skeleton className="h-2 w-[200px]" />
              <Skeleton className="h-4 w-[220px]" />
              <Skeleton className="h-2 w-[180px]" />
            </div>
          </div>
        ))}
      </div>
  );
}

export default BottomNewsSkeleton;
