import Link from "next/link";

type ListNameProps = {
  title: string;
  link: string;
};
export function ListName({ title, link }: ListNameProps) {
  console.log("LISTNAME", link);
  return (
    <>
      <Link href={`/upcoming?name=${link}`}>
        <div>
          <div className="font-bold text-[24px] text/text-foreground flex items-center flex-row gap-2 px-2 py-4 ml-5 ">
            {title}
          </div>
        </div>
      </Link>
    </>
  );
}
