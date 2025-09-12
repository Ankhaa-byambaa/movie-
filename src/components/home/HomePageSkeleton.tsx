import { Skeleton } from "@/components/ui/skeleton";

export function HomePageSkeleton() {
  return (
    <>
      <Skeleton className="w-screen h-[600px]" />
      {Array.from({ length: 10 }).map((_, i) => {
        <div className="flex ">
          <Skeleton className="w-[230px] h-[440px] flex flex-wrap gap-8" />
        </div>;
      })}
    </>
  );
}
