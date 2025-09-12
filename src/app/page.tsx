import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Footer } from "../components/home/Footer";

import { ModeToggle } from "../components/home/ThemeToggle";
import { TrailerSection } from "../components/home/TrailerSection";
import { MainCard } from "../components/home/MainCard";
import { Header } from "@/components/home/Header";
// import { HomePage } from "@/components/home/HomePageSkeleton";
//1. home pagiin hee buh style css iig bichij shalgaj duusagh
//-header
//-trailersection
//-main cards iin haa popular , top rated iig duusgah
//-footer ee shalgah
//-movie datails page iinhee sketch iig hargah

export default async function Home() {
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();

  console.log(upcomingMovies);

  return (
    <>
      <div className="flex gap-[52px] flex-col ">
        <Header />
        <TrailerSection />

        <div className="ml-20  ">
          <div>
            <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] ">
              Upcoming
              <div className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px]">
                See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
              </div>
            </span>
          </div>
          <div className="overflow-y-scroll w-full h-[912px] ">
            <div className="flex gap-8 flex-row flex-wrap">
              {upcomingMovies.results.map((movie) => (
                <MainCard
                  key={movie.id}
                  title={movie.title}
                  score={movie.vote_average}
                  image={movie.poster_path}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
