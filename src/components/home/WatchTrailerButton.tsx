import Link from "next/link";
import { TrailerDialog } from "./TrailerDialog";
import { TrailerResponseType } from "@/types";
import { getMovieDetails, getMovieTrailers } from "@/utils/getDatas";
type WatchTrailerButtonProps = {
  movieId: number;
};
type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};
export function WatchTrailerButton({ movieId }: WatchTrailerButtonProps) {
  const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
    const dynamicParams = await params;
    const id = dynamicParams.id;
    const movieDetailData = await getMovieDetails(id);

    const trailerData: TrailerResponseType = await getMovieTrailers(id);

    const trailer = trailerData.results.find((item) => item.type === "Trailer");

    return (
      <div className="text-2xl font-bold">
        {movieDetailData.title}
        <>
          <TrailerDialog youtubeKey={trailer?.key} />
        </>
      </div>
    );
  };

  return (
    <>
      <button className="w-[145px] h-10 py-4 px-2 flex gap-2 bg-white items-center justify-center rounded-md">
        <img className="h-4" src="play.svg" alt="" />
        <Link href="" className="text-[#18181B] text-[14px] leading-5">
          Watch Trailer
        </Link>
      </button>
    </>
  );
}
