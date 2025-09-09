import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const trailerPictures = [
  {
    image: "trailer1.jpg",
    name: "wicked",
    score: 7.4,
  },
  {
    image: "trailer3.jpeg",
    name: "wicked",
    score: 7.4,
  },
  {
    image: "trailer2.jpeg",
    name: "wicked",
    score: 7.4,
  },
  {
    image: "trailer1.jpg",
    name: "wicked",
    score: 7.4,
  },
];

export function TrailerSection() {
  return (
    <Carousel className="w-full h-auto ">
      <CarouselContent>
        {trailerPictures.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <CardContent className="h-[600px] rounded-md py-0 px-0">
                <img className="h-[600px] w-full" src={movie.image} />
                <span className="text-4xl font-semibold"></span>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
