import { DetailsPageTrailerButton } from "@/components/home/DetailsPageTrailerButton";
// import { GenrePageBadges } from "@/components/home/GenrePageBadges";
import { aboutMovie, movieDetailsType, TrailerResponseType } from "@/types";
import {
  getInformatiosAboutDirectorsAndWriters,
  getMovieDetails,
  getMovieTrailers,
} from "@/utils/getDatas";
import { Separator } from "@/components/ui/separator";
import { MoviesContainer } from "@/components/home/MoviesContainer";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetails(id);

  // const similarMovie = await getSimilarMovie(id);
  return {
    title: `MovieZ | ${movieDetailData.title}`,
  };
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;

  const id = dynamicParams.id;
  const aboutDirectorsAndWriters: aboutMovie =
    await getInformatiosAboutDirectorsAndWriters(id);
  // const cast = aboutDirectorsAndWriters.cast;
  // const crew = aboutDirectorsAndWriters.crew;
  const movieDetailData: movieDetailsType = await getMovieDetails(id);

  const trailerData: TrailerResponseType = await getMovieTrailers(id);
const getData:aboutMovie = await getInformatiosAboutDirectorsAndWriters(id)
console.log("GET DATA CAST AND CREW",getData) 

const writers =getData.crew.filter((items)=>{
  return items.known_for_department==="Writing"
})
const stars =getData.cast.filter((items)=>{
  return items.known_for_department==="Acting"
})
const director = getData.crew.find((item)=>item.known_for_department==="Directing")
  const trailer = trailerData.results.find((item) => item.type === "Trailer");
  console.log("trailerData",trailerData) 
  console.log('WRITERS',writers)
  console.log('DIRECTORS',director)
  
  return (
    <>
      <div className="flex gap-10 flex-col ml-20 mr-20">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-[24px] sm:text-[36px] mt-8  font-bold text-white">
              {movieDetailData.title}
            </h1>
            <div className="sm:text-[18px] text-[14px] text-white">
              {movieDetailData.release_date}
            </div>
          </div>

          <div className={"flex gap-2"}>
            <p className="w-[14px] ">⭐</p>
            <span className="text-4 font-bold text-white">
              {movieDetailData.vote_average}
            </span>
            <p className="text-3 text-white">/10</p>
          </div>
        </div>

        <div className="flex h-[211px] gap-10 sm:h-[428px]">
          <img
            className=" w-[100px] sm:w-[290px] "
            src={`https://image.tmdb.org/t/p/original${movieDetailData.poster_path}`}
          />
          <div>
            <img
              className="  hover:bg-[#00000066]  w-screen  sm:w-[760px] "
              src={`https://image.tmdb.org/t/p/original${movieDetailData.backdrop_path}`}
            />

            <div className="-mt-[55px] ml-[20px]">
              <div className="flex gap-3 items-center">
                <DetailsPageTrailerButton youtubeKey={trailer?.key} />
                <span className=" text-white  text-4 ">Play Trailer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          {movieDetailData.genres.map((genre, index) => {
            return (
              <button
                key={index}
                className="sm:text-[18px] rounded-4xl  border border-gray-300 sm:py-1 sm:px-3 text-[14px] py-0.5 px-1 "
              >
                {genre.name}
              </button>
            );
          })}
        </div>
        <p className="text-white text-[16px] w-auto">
          {movieDetailData.overview}
        </p>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-bold text-[14px] text-white">Director</p>
          <div>{director?.name}</div>
          </div>
          <Separator className="bg-gray-500" />
          <div>
            <p className="font-bold text-[14px] text-white">Writers</p>

          </div>
          <Separator className="bg-gray-500" />
          <div>
            <p className="font-bold text-[14px] text-white">Stars</p>
    
          </div>
          <Separator className="bg-gray-500" />
        </div>
        <div className="flex justify-between flex-row items-center">
          <p className="font-bold text-[24px] text-white">More like this</p>
          <div className="text-[14px] text-white">see more</div>
        </div>
        <>{/* <MoviesContainer movies={} title={} link="" /> */}</>
      </div>
    </>
  );
};

export default DetailDynamicPage;
