"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const trailer = [
  {
    image: "20241116_CUP001.jpg",
    name: "Gladiator II",
    score: 8.0,
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
  },
  {
    image: " trailer1.jpg",

    name: "Wicked",
    score: 7.4,
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
  {
    image: "moana-s85ecs0v8hng5rpd.jpg",
    name: "Moana",
    score: 6.4,
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
  },
];

export function TrailerSection() {
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
    <div className="">
      <Carousel setApi={setApi} className="">
        <CarouselContent>
          {trailer.map((movie, index) => (
            <CarouselItem key={index}>
              <Card className="py-0 border-transparent">
                <CardContent className="w-screen h-[600px] flex justify-center px-0 py-0 relative  ">
                  <img className="w-screen" src={movie.image}></img>
                  <div className="absolute left-[140px] top-[202px] flex flex-col gap-4">
                    <div className="flex flex-col items-start text-white text-4 ">
                      Now playing:
                      <span className="font-bold text-[36px] text-white">
                        {movie.name}
                      </span>
                      <div className="flex gap-1 ">
                        <img className="w-6" src="star.svg" />
                        <div>
                          <span className="text-[18px] font-bold text-[#FFFFFF] ">
                            {movie.score}
                          </span>
                          <span className="text-4 text-[#71717A]">/10</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[12px] text-white w-[302px] leading-4">
                      {movie.description}
                    </div>
                    <div className="w-[145px] h-10 py-4 px-2 flex gap-2 bg-white items-center justify-center rounded-md">
                      <img className="h-4" src="play.svg" alt="" />
                      <a
                        href="#"
                        className="text-[#18181B] text-[14px] leading-5"
                      >
                        Watch Trailer
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-11 py-0 px-0" />
        <CarouselNext className="absolute right-11 py-0 px-0" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        {current} /{count}
      </div>
    </div>
  );
}
