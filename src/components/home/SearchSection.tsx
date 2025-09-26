"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { movieResponseType } from "@/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { getSearchedMovies } from "@/utils/getDatas";
import { Separator } from "@/components/ui/separator";
import { SeeMore } from "./SeeMore";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };
  return (
    <div>
      <Input
        value={searchValue}
        onChange={handleChange}
        className="pl-10 w-[379px]"
        placeholder="Search.."
      />
      <div>
        <Popover open={isOpen}>
          <PopoverTrigger className="hidden "></PopoverTrigger>
          <PopoverContent className="w-[577px] flex flex-col justify-center ml-[30vw] mt-[7vw] ">
            {foundMovies?.results.slice(0, 5).map((movie) => {
              return (
                <div key={movie.id}>
                  <div className=" h-auto flex flex-row gap-4 mb-2 ">
                    <img
                      className="w-[67px] h-[100px] rounded-md
                    "
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                    <div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[20px] text-white text-semibold  ">
                          {movie.title}
                        </p>
                        <div className="flex gap-1 flex-row items-center ">
                          <img className="w-[14px] h-[14px]" src={"star.svg"} />
                          <span className="text-3">
                            {movie.vote_average}/10
                          </span>
                        </div>
                        <div className="flex justify-between items-center w-[543px]">
                          <div>{movie.release_date.slice(0, 4)}</div>
                          {/* <link href="#"> */}
                          {/* <SeeMore listName={`${movie.id}`} /> */}
                          {/* </link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator className="m-4" />
                </div>
              );
            })}
            <Link href={`/search?value=${searchValue}`}>
              See all results for {searchValue}
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
