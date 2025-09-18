import { MovieType } from "@/types";

type SeeMoreType = {
  movieId: string;
};
export function SeeMore({ movieId }: SeeMoreType) {
  return (
    <div>
      {movieId}
      <div className="text-[14px] text-white flex items-center flex-row gap-2 px-2 py-4 mr-20 ">
        See more ›
      </div>
    </div>
  );
}
