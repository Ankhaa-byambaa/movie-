import axios from "axios";
export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
  },
});
