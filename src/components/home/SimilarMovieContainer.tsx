//similar movie container similar movie card
// see more darah ued huudasruu oroh '
//responsive
import { movieResponseType, MovieType } from "@/types";
import { MainCard } from "./MainCard";
import { SeeMore } from "./SeeMore";

import { getSimilarMovieList } from "@/utils/getDatas";
import { ListName } from "./ListName";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
  link: string;
};

export async function SimilarMovieContainer({
  movies,
  title,
  link,
}: MoviesContainerProps) {
  const Movies: movieResponseType = await getSimilarMovieList("28");
  console.log("similar MOVIE", Movies);
  return (
    <div>
      <div className="flex justify-between w-full mt-[50px]  items-center ">
        <ListName title={`${title}`} link={`${link}`} />
        <SeeMore listName={`${link}`} />
      </div>
      <div className="flex flex-col gap-8">
        <div className="  mr-20 gap-[1px] grid grid-flow-row grid-cols-2   lg:grid-cols-5  md:grid-cols-3">
          {movies.slice(0, 10).map((movie) => (
            <MainCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
