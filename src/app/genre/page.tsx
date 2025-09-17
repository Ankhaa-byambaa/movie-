
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
      <div><DropdownMenu>

  <DropdownMenuContent >
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
      
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
  );
};

export default Genre;
