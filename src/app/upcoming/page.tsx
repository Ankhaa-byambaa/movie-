import { MainCard } from "@/components/home/MainCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { movieResponseType, MovieType } from "@/types";
import { getMoviesList } from "@/utils/getDatas";
type UpcomingHomePageParams = {
  searchParams: Promise<{ name: string; page: string }>;
};
export default async function Page({ searchParams }: UpcomingHomePageParams) {
  const params = await searchParams;
  const title = params.name;
  const page = params.page || "1";
  const currentUrl = `/upcoming?name=${title}&`;
  const Movies: movieResponseType = await getMoviesList(`${title}`, `${page}`);
  return (
    <>
      <div className="ml-20">
        <div className="flex justify-between w-full mt-[50px]  items-center ">
          <p className="text-[24px] font-bold text-white mb-[52px] mt-[52px] ml-10">
            {title}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="  mr-20 gap-[1px] grid grid-flow-row grid-cols-2   lg:grid-cols-5  md:grid-cols-3">
            {Movies.results.map((movie) => (
              <MainCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          {page !== "1" && (
            <>
              <PaginationItem>
                <PaginationPrevious
                  href={`${currentUrl}page=${Number(page) - 1}`}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`${currentUrl}page=${Number(page) - 1}`}>
                  {Number(page) - 1}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationLink isActive href="#">
              {page}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href={`${currentUrl}page=${Number(page) + 1}`}>
              {Number(page) + 1}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`${currentUrl}page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
