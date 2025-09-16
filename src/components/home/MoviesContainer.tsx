// import { MovieType } from "@/types/";
import { Footer } from "@/components/home/Footer";

import { MainCard } from "@/components/home/MainCard";
import { MovieType } from "@/types";

type MoviesContainer = {
  movies: MovieType[];
};

export function MoviesContainer({ movies }: MoviesContainer) {
  return (
    <div className="flex gap-[52px] flex-col ">
      <div className="ml-20  ">
        <div>
          <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] ">
            Upcoming
            <div className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px]">
              See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
            </div>
          </span>
        </div>
        <div className="overflow-y-scroll w-full h-[912px] ">
          <div className="flex gap-8 flex-row flex-wrap">
            {movies.map((movie) => (
              <MainCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
