import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
type DetailsCardsProps = {
  score: number;
  title: string;
  image: string;
  id: number;
};
export function DetailsCrads({ title, image, score, id }: DetailsCardsProps) {
  return (
    <>
      <Card
        className={
          "w-[190px] bg-secondary p-0 overflow-hidden gap-2 hover:bg-[#0000004D] h-[281px] rounded-2"
        }
      >
        <CardContent className={"p-0 "}>
          <div className=" bg-black h-[340px]">
            <img
              className="w-[190px]  hover:opacity-50"
              src={`https://image.tmdb.org/t/p/w500/${image}`}
            />
          </div>
        </CardContent>

        <CardFooter className={"flex flex-col items-start p-2 "}>
          <CardDescription className={"flex gap-2"}>
            <img className="w-[13px] h-[12px]" src={"star.svg"} />
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
