"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType, TrailerResponseType } from "@/types";

import { TrailerDialog } from "../trailer/TrailerDialog";
import { getMovieTrailers } from "@/utils/getDatas";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-screen relative">
        <CarouselContent>
          {movies.map((movie, index) => (
            <MovieCarouselItem key={index} movie={movie} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="hidden md:block">
        <div className="flex gap-2  absolute left-[40%] top-[65%]">
          {Array.from({ length: count }).map((_, index) => (
            <div
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`rounded-full size-[8px] ${
                index + 1 === current ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  const getTrailerData = async () => {
    const trailerData: TrailerResponseType = await getMovieTrailers(
      movie.id.toString()
    );
    const trailer = trailerData.results.find((item) => item.type === "Trailer");
    setTrailerKey(trailer?.key || "");
  };

  React.useEffect(() => {
    getTrailerData();
  }, []);

  return (
    <>
      <CarouselItem className=" md:h-[600px] h-auto relative  ">
        <img
          className=" w-full "
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
        <div className=" absolute top-[80%]  md:left-[15%] md:top-[50%]  flex flex-col gap-4">
          <div className="flex flex-col items-start text-white text-4 ">
            Now playing:
            <span className="font-bold text-[36px] text-white">
              {movie.title}
            </span>
            <div className="flex gap-1 ">
              <img className="w-6" src="star.svg" />
              <div>
                <span className="text-[18px] font-bold text-[#FFFFFF] ">
                  {movie.vote_average}
                </span>
                <span className="text-4 text-[#71717A]">/10</span>
              </div>
            </div>
          </div>
          <div className="text-[12px] text-white w-[302px] h-[80px] flex overflow-scroll leading-4">
            {movie.overview}
          </div>
          <TrailerDialog youtubeKey={trailerKey} />
        </div>
      </CarouselItem>
    </>
  );
};
