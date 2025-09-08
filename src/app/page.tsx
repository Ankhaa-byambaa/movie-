import { Card1 } from "@/components/home/";

export default function Home() {
  return (
    <>
      <div className="overflow-y-scroll w-full h-[912px] ">
        <div className="flex gap-8 flex-row flex-wrap">
          <Card1
            title="Dear Santa"
            score={6.9}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmEMNIT-Cf1EeNmODJ2td69608Q1N6V68Mg&s"
          />
          <Card1
            title="How To Train Your Dragon Live Action"
            score={4.9}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd2GhWAsrCCFSOOoqGJNRMMIr7HT-KTbcXg&s"
          />
          <Card1
            title="Alien Romulus"
            score={7}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOlGbejszgjVOtK9DSVIC-vQB7SBJfl5rJA&s"
          />
          <Card1
            title="From the Ashes"
            score={6.9}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgsG10UVyzYOPcE1N4XlnSe5GQnMjJQZ7ig&s"
          />
          <Card1
            title="Space dog"
            score={7.9}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYDONOJ6nXqGi1sKehOZ5fQwmtaotMblQCQ&s"
          />

          <Card1 title="Y2K" score={7} image="Y2K.jpeg" />
          <Card1 title="Sonic the Hedgehog 3" score={6.5} image="sonic.jpeg" />
          <Card1
            title="Solo Leveling: ReAwakening"
            score={10}
            image="solo.jpeg"
          />
          <Card1 title="Get Away" score={7.3} image="get away.jpeg" />
        </div>
      </div>
    </>
  );
}
