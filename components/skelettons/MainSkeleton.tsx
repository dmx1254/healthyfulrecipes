import { Skeleton } from "@/components/ui/skeleton";

export const MainSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-2 max-lg:self-center p-0 md:p-4">
      <Skeleton className="w-[300px] lg:w-[700px] h-[250px] lg:h-[500px]" />
      <Skeleton className="h-3 w-full max-w-[400px]" />
      <Skeleton className="h-4 w-full max-w-[700px]" />
      <Skeleton className="h-4 w-full max-w-[700px]" />
    </div>
  );
};