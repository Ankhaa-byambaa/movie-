import { MainCard } from "./MainCard";
type SectionMainTYpe = {
  mainTitle: string;
};

export function SectionMain({ mainTitle }: SectionMainTYpe) {
  return (
    <>
      <div className="ml-20 ">
        <div>
          <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] ">
            {mainTitle}
            <div className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px]">
              See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
            </div>
          </span>
        </div>
        <div className="overflow-y-scroll w-full h-[912px] ">
          <div className="flex gap-8 flex-row flex-wrap">
            <MainCard title="dear santa" score={6.9} image="1.1.jpeg" />
            <MainCard
              title="How To Train Your Dragon Live Action"
              score={4.9}
              image="1.2.jpeg"
            />
            <MainCard title="Alien Romulus" score={7} image="1.3.jpeg" />
            <MainCard title="From the Ashes" score={6.9} image="1.4.jpeg" />
            <MainCard title="Space dog" score={7.9} image="1.5.webp" />
            <MainCard title="The order" score={4.9} image="1.6.jpeg" />
            <MainCard title="Y2K" score={7} image="1.7.jpeg" />
            <MainCard
              title="Solo Leveling: ReAwakening"
              score={10}
              image="1.8.jpeg"
            />
            <MainCard title="Get Away" score={7.3} image="1.9.jpeg" />
            <MainCard
              title="Sonic the Hedgehog 3"
              score={6.5}
              image="1.10.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
