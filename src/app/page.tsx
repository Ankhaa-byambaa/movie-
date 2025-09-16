import { TrailerSection } from "../components/home/TrailerSection";
import { MainCard } from "../components/home/MainCard";
import {
  getMovieDetails,
  getMovieStarsDirectorWritersDetails,
} from "@/utlis/getDatas";

// import { HomePage } from "@/components/home/HomePageSkeleton";
//1. home pagiin hee buh style css iig bichij shalgaj duusagh
//-header
//-trailersection
//-main cards iin haa popular , top rated iig duusgah
//-footer ee shalgah
//-movie datails page iinhee sketch iig hargah

// Endpoints
// GET: /movie/popular?language=en-US&page=1
// 	Алдартай кинонуудын жагсаалтыг авах.
// 	2.	GET: /movie/upcoming?language=en-US&page=1
// Удахгүй нээлтээ хийх кинонуудын жагсаалт авах.
// 	3.	GET: /movie/top_rated?language=en-US&page=1
// Өндөр үнэлгээтэй кинонуудын жагсаалт авах.
// 	4.	GET: /movie/now_playing?language=en-US&page=1
// Одоо кино театруудад гарч буй кинонуудын жагсаалт авах.
// 	5.	GET: /movie/${movieId}?language=en-US
// Тодорхой киноны дэлгэрэнгүй мэдээллийг авах.
// 	6.	GET: /genre/movie/list?language=en
// Киноны төрөл буюу жанрын жагсаалт авах.
// 	7.	GET: /discover/movie?language=en&with_genres=${genreIds}&page=${page}
// Тухайн жанрын кинонуудыг шүүж дуудаж авах.
// 	8.	GET: /search/movie?query=${searchValue}&language=en-US&page=${page}
// Хайлтын утгад тохирох кинонуудын жагсаалт авах.
// 	9.	GET: /movie/${id}/videos?language=en-US
// Тодорхой киноны трейлер, видео мэдээллийг авах.
// 	10.	GET: /movie/${id}/credits?language=en-US
// Тухайн киноны жүжигчид болон багийн мэдээлэл авах.
// 	11.	GET: /movie/${id}/similar?language=en-US&page=1
// Ижил төстэй кинонуудын жагсаалт авах.

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
type movieStarsType = {
  page: number;
  totalPages: number;
};
type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};
type movieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
};

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

  type getMovieDetailsProps = {
    id: number;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();
  // const getMovieDetails: getMovieDetailsType = await getMovieDetails()

  console.log(upcomingMovies);
  const myMovie: movieDetailsType = await getMovieDetails(1149504);
  const movieStars: movieStarsType = await getMovieStarsDirectorWritersDetails(
    1149504
  );
  console.log("MOVIE DETAILS", myMovie);
  console.log("MOVIE STARS", movieStars);

  return (
    <>
      <div className="flex gap-[52px] flex-col ">
        <TrailerSection />

        <div className="ml-20  ">
          <div>
            <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] font-semibold ">
              Upcoming
              <p className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px] hover:underline-offset-4">
                See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
              </p>
            </span>
          </div>
          <div className="overflow-y-scroll w-full h-[912px] ">
            <div className="flex gap-8 flex-row flex-wrap">
              {upcomingMovies.results.map((movie) => (
                <MainCard
                  id={movie.id}
                  key={movie.id}
                  title={movie.title}
                  score={movie.vote_average}
                  image={movie.poster_path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
