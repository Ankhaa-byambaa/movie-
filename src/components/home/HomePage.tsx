import { MoviesContainer } from "@/components/home/MoviesContainer";
import { MovieCarousel } from "@/components/home/MovieCarousel";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/getDatas";

export async function HomePage() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <>
      <MovieCarousel movies={nowPlayingMovies.results} />
      <div className="ml-20">
        <MoviesContainer
          movies={upcomingMovies.results}
          title="Upcoming"
          link="upcoming"
        />
        <MoviesContainer
          movies={popularMovies.results}
          title="Popular"
          link="popular"
        />
        <MoviesContainer
          movies={topRatedMovies.results}
          title="Top Rated"
          link="top_rated"
        />
      </div>
    </>
  );
}
