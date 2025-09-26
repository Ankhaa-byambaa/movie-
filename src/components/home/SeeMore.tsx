import Link from "next/link";

type SeeMoreType = {
  listName: string;
};
export function SeeMore({ listName }: SeeMoreType) {
  return (
    <Link href={`/upcoming?name=${listName}`}>
      <div>
        <div className="hover:font-bold text-[14px] text/text-foreground flex items-center flex-row gap-2 px-2 py-4 mr-20 ">
          See more ›
        </div>
      </div>
    </Link>
  );
}
