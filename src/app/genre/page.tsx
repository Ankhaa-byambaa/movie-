import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { GenreResponseType } from "@/types";
import { getMovieGenres } from "@/utils/getDatas";
import { MainCard } from "@/components/home/MainCard";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/getDatas";

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
    <div className="ml-20">
      <p className="text-[#09090B] text-[30px] font-bold">Search filter</p>
      <DropdownMenuItem className="hover:!bg-transparent max-w-[400px] flex flex-wrap">
        {genresResponse.genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre?id=${genre.id}&name=${genre.name}`}
          >
            <Badge variant="outline">
              {genre.name}
              <ChevronRight />
            </Badge>
          </Link>
        ))}
      </DropdownMenuItem>
      <div className="text-[#09090B] text-5 font-bold mb-8">{name}</div>
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
  );
};

export default Genre;
