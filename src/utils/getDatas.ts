import { instance } from "./axios";

export const getMoviesList = async (listName: string, page?: string) => {
  const res = await instance.get(
    `movie/${listName}?language=en-US&page=${page || "1"}`
  );

  return res.data;
};

export const getSimilarMovieList = async (id: string) => {
  const res = await instance.get(`movie/${id}/similar?language=en-US&page=`);

  return res.data;
};
export const getSearchedMovies = async (searchValue: string) => {
  const res = await instance.get(
    `search/movie?query=${searchValue}&language=en-US&page=${1}`
  );
  return res.data;
};

export const getMovieGenres = async () => {
  const res = await instance.get(`genre/movie/list?language=en`);
  // console.log("GENRERESPONSE", res.data);
  return res.data;
};
export const getMoviesByGenreId = async (genreIds: string, page: string) => {
  const res = await instance.get(
    `discover/movie?language=en&with_genres=${genreIds}&page=${page}`
  );

  return res.data;
};

export const getMovieDetails = async (movieId: string) => {
  const { data } = await instance.get(`movie/${movieId}?language=en-US`);

  return data;
};

export const getMovieTrailers = async (id: string) => {
  const { data } = await instance.get(`movie/${id}/videos?language=en-US`);
  return data;
};
export const getInformatiosAboutDirectorsAndWriters = async (id: string) => {
  const { data } = await instance.get(`/movie/${id}/credits?language=en-US`);
  return data;
};
