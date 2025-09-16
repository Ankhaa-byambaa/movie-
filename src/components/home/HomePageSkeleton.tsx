import { Skeleton } from "@/components/ui/skeleton";

export function HomePageSkeleton() {
  return (
    <>
      <Skeleton className="w-screen h-[600px] cursor-wait" />
      {Array.from({ length: 10 }).map((_, i) => {
        <div key={i} className="flex ">
          <Skeleton className="w-[230px] h-[440px] flex flex-wrap gap-8 cursor-wait" />
        </div>;
      })}
    </>
  );
}
