import Link from "next/link";

type SeeAllResultButtonProps = {
  searchValue: string;
};
export function SeeAllResultButton({ searchValue }: SeeAllResultButtonProps) {
  return (
    <>
      <Link href={`/search?value=${searchValue}`}>
        <div className="text-[14px]text/text-foreground  flex text-nowrap">
          See all results for "<p className="font-bold">{searchValue}</p>"
        </div>
      </Link>
    </>
  );
}
