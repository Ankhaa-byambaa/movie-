import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
type card1Type = {
  score: number;
  title: string;
  image: string;
  id: number;
};
export function MainCard({ score, title, image, id }: card1Type) {
  return (
    <>
      <Card
        className={
          "md:w-[230px] w-[157px] bg-secondary p-0 h-auto overflow-hidden gap-2 hover:bg-[#0000004D] "
        }
      >
        <CardContent className="p-0">
          <div className=" bg-black h-auto">
            <img
              className="md:w-[230px] w-[157px]  hover:opacity-50"
              src={`https://image.tmdb.org/t/p/w500/${image}`}
            />
          </div>
        </CardContent>

        <CardFooter className={"flex flex-col items-start p-2 "}>
          <CardDescription className={"flex gap-2"}>
            <img className="w-[14px] h-[14px]" src={"star.svg"} />
            <span className="test-3">{score}/10</span>
          </CardDescription>

          <CardTitle className="md:text-[18px] text-[14px] text-[#09090B] text-semibold  ">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </>
  );
}
