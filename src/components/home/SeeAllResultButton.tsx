import Link from "next/link";

type SeeAllResultButtonProps = {
  searchValue: string;
};
export function SeeAllResultButton({ searchValue }: SeeAllResultButtonProps) {
  return (
    <>
      <Link href={`/search?value=${searchValue}`}>
        See all results for {searchValue}
      </Link>
    </>
  );
}
