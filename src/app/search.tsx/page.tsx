import { getSearchedMovies } from "@/utils/getDatas";

type PageProps = {
  searchParams: Promise<{ value: string }>;
};
export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const value = params.value;
  const getData = await getSearchedMovies(value.toString());
  console.log("GET DATA", getData("28"));
  return <div></div>;
}
