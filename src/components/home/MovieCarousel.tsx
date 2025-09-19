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

type MovieCarouselProps = {
  trailer: MovieType[];
};

export function MovieCarousel({ trailer }: MovieCarouselProps) {
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
      <Carousel setApi={setApi} className="relative">
        <CarouselContent>
          {trailer.map((movie, index) => (
            <CarouselItem
              key={index}
              className="  w-screen  h-[600px] flex justify-center px-0 py-0 relative mt-10 "
            >
              <img
                className=" w-screen "
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              ></img>
              <div className="absolute  left-[15%] top-[202px] flex flex-col gap-4">
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
                <div className="text-[12px] text-white w-[302px] leading-4">
                  {movie.overview}
                </div>
                <div className="w-[145px] h-10 py-4 px-2 flex gap-2 bg-white items-center justify-center rounded-md">
                  <img className="h-4" src="play.svg" alt="" />
                  <a href="#" className="text-[#18181B] text-[14px] leading-5">
                    Watch Trailer
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
          <CarouselPrevious className="absolute w-[100px]" />
          <CarouselNext />
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2 absolute bottom-4">
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
    </>
  );
}
