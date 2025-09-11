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

const GENRES = [
  {
    name: "Action",
  },
  {
    name: "Adventure",
  },
  {
    name: "Animation",
  },
  {
    name: "Biography",
  },
  {
    name: "comedy",
  },
  {
    name: "Crime",
  },
  {
    name: "Documentary",
  },
  {
    name: "Drama",
  },
  {
    name: "Family",
  },
  {
    name: "Fantasy",
  },
  {
    name: "Film-Noir",
  },
  {
    name: "Game-Show",
  },
  {
    name: "History",
  },
  {
    name: "Horror",
  },
  {
    name: "Music",
  },
  {
    name: "Musical",
  },
  {
    name: "Mystery",
  },
  {
    name: "News",
  },
  {
    name: "Drama",
  },
  {
    name: "Reality-TV",
  },
  {
    name: "Romance",
  },

  {
    name: "Sci-fi",
  },
  {
    name: "Short",
  },
  {
    name: "Talk-Show",
  },
  {
    name: "Thriller",
  },

  {
    name: "War",
  },
  {
    name: "Western",
  },
];

export function GenreDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[577px]" align="start">
        <DropdownMenuLabel className="text-2xl font-bold">
          Genres
        </DropdownMenuLabel>
        <p className="px-2">See list of movies by genre</p>
        <DropdownMenuSeparator className="my-[10px]" />
        <DropdownMenuItem className="hover:!bg-transparent  flex gap-4 flex-wrap items-start">
          {GENRES.map((genre) => (
            <Link href="/movieDetails">
              <Badge
                variant="outline"
                className="flex gap-2 hover:bg-[#0000001D] "
              >
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
