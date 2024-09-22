import { Skeleton } from "../ui/skeleton";

export const MainFourSkelet = () => {
    return (
      <div className="max-lg:w-full flex flex-col items-start gap-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="max-lg:w-full flex items-start gap-2">
            <Skeleton className="w-[140px] h-[140px]" />
            <div className="flex flex-col items-start gap-2">
              <Skeleton className="h-3 w-[140px]" />
              <Skeleton className="h-3 w-[140px]" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  