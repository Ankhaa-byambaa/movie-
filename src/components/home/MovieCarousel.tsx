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
import { MovieType } from "@/types";
import { WatchTrailerButton } from "./WatchTrailerButton";

type MovieCarouselProps = {
  trailer: MovieType[];
};

export function MovieCarousel({ trailer }: MovieCarouselProps) {
  const backdrop_path = trailer.slice(0, 3).map((movie, index) => {
    console.log(
      { index },
      `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    );
  });

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
      <Carousel setApi={setApi} className="relative mt-10 -mb-10  ">
        <CarouselContent>
          {trailer.slice(0, 10).map((movie, index) => (
            <CarouselItem
              key={index}
              className=" md:h-[600px] h-auto relative  "
            >
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
                <WatchTrailerButton movieId={movie.id} />
              </div>
              <CarouselPrevious className="absolute left-[44px]" />
              <CarouselNext className="absolute right-[44px]" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex  gap-2  p-0 absolute  lg:right-[50vh] top-[90%] ">
          {Array.from({ length: count }).map((_, index) => (
            <div
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`rounded-full size-2 ${
                index + 1 === current ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </Carousel>
    </>
  );
}
