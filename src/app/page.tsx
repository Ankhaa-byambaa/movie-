import { HomePage } from "@/components/home/HomePage";
import { HomePageSkeleton } from "@/components/home/HomePageSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
}
