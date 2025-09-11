import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  // CardHeader,
  CardTitle,
} from "@/components/ui/card";
type card1Type = {
  score: number;
  title: string;
  image: string;
};
export function MainCard({ score, title, image }: card1Type) {
  return (
    <>
      <Card
        className={
          "w-[230px] bg-secondary p-0 overflow-hidden gap-2 hover:bg-[#0000004D] h-[440px]"
        }
      >
        <CardContent className={"p-0 "}>
          <div className=" bg-black h-[340px]">
            <img
              className="w-[230px]  hover:opacity-50"
              src={`https://image.tmdb.org/t/p/w500/${image}`}
            />
          </div>
        </CardContent>

        <CardFooter className={"flex flex-col items-start p-2 "}>
          <CardDescription className={"flex gap-2"}>
            <img className="w-[14px] h-[]14px" src={"star.svg"} />
            <span className="test-3">{score}/10</span>
          </CardDescription>

          <CardTitle className="text-[18px] text-[#09090B] text-semibold  ">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </>
  );
}
