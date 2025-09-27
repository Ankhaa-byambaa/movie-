export type aboutMovie = {
  cast: informationsAboutActress[];
  crew: crew[];
};
export type MovieType = {
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

export type GenreType = {
  id: number;
  name: string;
};

export type TrailerType = {
  id: string;
  key: string;
  type: string;
};
export type TrailerResponseType = {
  id: number;
  results: TrailerType[];
};
export type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export type movieDetailsType = {
  adult: boolean;
  genres: GenreType[];
  backdrop_path: string;
  original_language: string;
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
export type informationsAboutActress= {
  known_for_department: string;
  name: string;
};
export type crew = {
  job: string;
  name: string;
  known_for_department:string

};



export type GenreResponseType = {
  genres: GenreType[];
};
