import { Skeleton } from "@/components/ui/skeleton";

export const MainDiabetSkeleton = () => {
  return (
    <div className="w-full max-w-6xl max-lg:flex-col-reverse flex justify-center self-center mx-auto items-start gap-10 lg:gap-20">
      <div className="max-lg:w-full max-lg:max-w-[750px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-lg:self-center">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-start gap-2">
            <Skeleton className="w-[250px] h-[100px]" />
            <div className="flex flex-col items-start gap-2">
              <Skeleton className="h-3 w-[100px]" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-start gap-2 max-lg:self-center">
        <Skeleton className="w-[300px] lg:w-[700px] h-[250px] lg:h-[500px]" />
        <div className="flex flex-col items-start gap-2">
          <Skeleton className="h-3 w-[100px]" />

          <Skeleton className="w-[300px] lg:w-[600px] h-4" />

          <Skeleton className="h-3 w-[120px]" />
        </div>
      </div>
    </div>
  );
};
