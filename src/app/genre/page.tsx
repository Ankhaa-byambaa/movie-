import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { getMovieGenres, getSimilarMovieList } from "@/utils/getDatas";
import { MainCard } from "@/components/home/MainCard";
import { GenreResponseType, movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/getDatas";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  const genresResponse: GenreResponseType = await getMovieGenres();
  return (
    <div className="ml-20 flex justify-center">
      <div className=" h-[500px]">
        <p className="text-6 font-bold">Genres</p>
        <p className="px-2 ">See list of movies by genre</p>
        <DropdownMenuSeparator />
        <div className="hover:!bg-transparent max-w-[400px] flex flex-wrap">
          {genresResponse.genres.map((genre) => (
            <Link
              key={genre.id}
              href={`/genre?id=${genre.id}&name=${genre.name}`}
            >
              <div className="text-3">
                {genre.name}
                <ChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-">
        <p className="text-white text-[30px] font-bold">Search filter</p>

        <div className="text-white text-[20px] font-bold mb-8">{name}</div>
        <div className="flex flex-wrap gap-12">
          {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
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
};

export default Genre;
