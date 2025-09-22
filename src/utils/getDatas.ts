import { instance } from "./axios";

// export const getMoviesList = async (listName: string) => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=1`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return data;
// };

// export const getSearchedMovies = async (searchValue: string) => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${1}`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
//       },
//     }
//   );
//   const data = await res.json();
//   console.log("Data irlee", data);
//   return data;
// };

// export const getMovieGenres = async () => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?language=en`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return data;
// };
// export const getMoviesByGenreId = async (genreIds: string, page: string) => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return data;
// };

export const getMoviesList = async (listName: string) => {
  const { data } = await instance.get(
    `movie/${listName}?language=en-US&page=1`
  );
  return data;
};
export const getSearchedMovies = async (searchValue: string) => {
  const res = await instance.get(
    `search/movie?query=${searchValue}&language=en-US&page=${1}`
  );
  return res.data;
};
export const getMovieGenres = async () => {
  const res = await instance.get(`genre/movie/list?language=en`);
  return res.data;
};
export const getMoviesByGenreId = async (genreIds: string, page: string) => {
  const res = await instance.get(
    `discover/movie?language=en&with_genres=${genreIds}&page=${page}`
  );
  return res.data;
};

// import { useEffect } from "react";
// export const get = async () => {
//   const get = await fetch(
//     "https://pub-54904ef3b9374b6c9f80cf1763a31f5b.r2.dev/cc-datas/weather-data.json"
//   );
//   const res = get.json;
//   const data = res;
//   useEffect(() => {
//     fetch(
//       "https://pub-54904ef3b9374b6c9f80cf1763a31f5b.r2.dev/cc-datas/weather-data.json"
//     )
//       .then((res) => res.json)
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error caught", error.messege);
//       });
//   }, []);
//   return console.log("EXAPMLE", data);
// };
