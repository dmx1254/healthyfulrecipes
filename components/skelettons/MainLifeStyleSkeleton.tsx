import { Skeleton } from "../ui/skeleton";

export const MainLifeStyleSkeleton = () => {
  return (
    <div className="flex max-sm:flex-col items-start justify-center mx-auto self-center gap-6">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="max-sm:w-full flex flex-col items-start gap-4 pt-4"
        >
          <Skeleton className="w-[300px] h-[300px]" />
          <div className="flex flex-col items-start gap-2">
            <Skeleton className="h-2 w-[140px]" />
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-2 w-[140px]" />
          </div>
        </div>
      ))}
    </div>
  );
};
