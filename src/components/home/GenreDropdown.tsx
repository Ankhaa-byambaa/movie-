import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

import { GenreResponseType } from "@/types";
import { getMovieGenres } from "@/utils/getDatas";
import { AllGenreButton } from "./AllGEnreButton";

export async function GenreDropdown() {
  const genresResponse: GenreResponseType = await getMovieGenres();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown /> Genre
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className=" mt-5" align="start">
          <DropdownMenuLabel className="text-2xl font-bold">
            Genres
          </DropdownMenuLabel>
          <p className="px-2 text/text-foreground text-4">
            See list of movies by genre
          </p>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:!bg-accent max-w-[400px] flex flex-wrap">
            {genresResponse.genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genre?id=${genre.id}&name=${genre.name}`}
              >
                <Badge className="hover:border-gray-500 flex flex-row gap-[2px] px-[3px] py-[1px] justify-center text-3 bg-[#18181B] rounded-4xl ">
                  {genre.name}
                  <ChevronRight />
                </Badge>
              </Link>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
