import { Card1 } from "@/components/home/";
export function MainSection() {
  return (
    <>
      <div className="ml-20 ">
        <div>
          <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] ">
            Upcoming
            <div className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px]">
              See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
            </div>
          </span>
        </div>
        <div className="overflow-y-scroll w-full h-[912px] ">
          <div className="flex gap-8 flex-row flex-wrap">
            <Card1 title="Dear Santa" score={6.9} image="1.1.jpeg" />
            <Card1
              title="How To Train Your Dragon Live Action"
              score={4.9}
              image="1.2.jpeg"
            />
            <Card1 title="Alien Romulus" score={7} image="1.3.jpeg" />
            <Card1 title="From the Ashes" score={6.9} image="1.4.jpeg" />
            <Card1 title="Space dog" score={7.9} image="1.5.webp" />
            <Card1 title="The order" score={4.9} image="1.6.jpeg" />
            <Card1 title="Y2K" score={7} image="1.7.jpeg" />
            <Card1
              title="Solo Leveling: ReAwakening"
              score={10}
              image="1.8.jpeg"
            />
            <Card1 title="Get Away" score={7.3} image="1.9.jpeg" />
            <Card1 title="Sonic the Hedgehog 3" score={6.5} image="1.10.jpeg" />
          </div>
        </div>
      </div>
    </>
  );
}
