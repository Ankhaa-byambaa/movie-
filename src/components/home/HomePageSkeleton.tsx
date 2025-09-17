import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export function HomePageSkeleton() {
  return (
    <>
      <Skeleton className="w-screen h-[600px] cursor-wait" />
      {Array.from({ length: 10 }).map((_, i) => {
        <div key={i} className="flex ">
          <Skeleton className="w-[230px] h-[440px] flex flex-wrap gap-8 cursor-wait" />
          <div className="w-screen h-screen flex items-center justify-center">
            <Loader2 size={48} className="animate-spin" />
          </div>
        </div>;
      })}
    </>
  );
}
