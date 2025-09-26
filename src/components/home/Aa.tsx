import { GenreResponseType, GenreType } from "@/types";
import { getMovieGenres } from "@/utils/getDatas";
import { Badge } from "lucide-react";

type AllGenreButtonProps = {
  genresList: GenreType[];
};

export async function Aa({ genresList }: AllGenreButtonProps) {
  console.log(genresList, "HAHHAH");
  return (
    <>
      <div className="flex flex-wrap w-[500px]">
        {genresList.map((genre, index) => {
          return (
            <div key={index}>
              <Badge className="text-white">{genre.name}</Badge>
            </div>
          );
        })}
      </div>
    </>
  );
}
