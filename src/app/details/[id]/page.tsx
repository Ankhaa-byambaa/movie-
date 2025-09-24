import { TrailerDialog } from "@/components/home/TrailerDialog";
import { TrailerResponseType } from "@/types";
import { getMovieDetails, getMovieTrailers } from "@/utils/getDatas";
import Link from "next/link";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetails(id);

  return {
    title: `MovieZ | ${movieDetailData.title}`,
  };
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetails(id);

  const trailerData: TrailerResponseType = await getMovieTrailers(id);

  const trailer = trailerData.results.find((item) => item.type === "Trailer");

  return (
    <>
      <div className="flex gap-10 flex-row">
        <div className="text-[24px] mt-8 mx-5  font-bold text-white">
          {movieDetailData.title}
        </div>
        <button className="w-[145px] h-10 py-4 px-2 flex gap-2 bg-white items-center justify-center rounded-md">
          <img className="h-4" src="play.svg" alt="" />
          <div className="text-[#18181B] text-[14px] leading-5">
            Watch Trailer
            <TrailerDialog youtubeKey={trailer?.key} />
          </div>
        </button>
      </div>
    </>
  );
};

export default DetailDynamicPage;
