// // import { MovieType } from "@/types/";
// import { Footer } from "@/components/home/Footer";

// import { MainCard } from "@/components/home/MainCard";
// import { MovieType } from "@/types";

// type MoviesContainer = {
//   movies: MovieType[];
// };

// export function MoviesContainer({ movies,title }: MoviesContainer) {
//   return (
//     <div className="flex gap-[52px] flex-col ">
//       <div className="ml-20  ">
//         <div>
//           <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] ">
//             Upcoming
//             <div className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px]">
//               See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
//             </div>
//           </span>
//         </div>
//         <div className="overflow-y-scroll w-full h-[912px] ">
//           <div className="flex gap-8 flex-row flex-wrap">
//             {movies.map((movie) => (
//               <MainCard
//                 id={movie.id}
//                 key={movie.id}
//                 title={movie.title}
//                 score={movie.vote_average}
//                 image={movie.poster_path}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }
import { MovieType } from "@/types";
import { MainCard } from "./MainCard";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div>
      <div className="flex justify-between w-full mt-[50px]  items-center ">
        <p className="text-[24px] font-bold text-white mb-[52px] mt-[52px]">
          {title}
        </p>
        <div className="text-[14px] text-white flex items-center flex-row gap-2 px-2 py-4 mr-20 ">
          See more ›
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="  mr-20 gap-[1px] grid grid-flow-row grid-cols-2   lg:grid-cols-5  md:grid-cols-3">
          {movies.slice(0, 10).map((movie) => (
            <MainCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
        {/* <div className="flex gap-8 md:overflow-x-scroll mr-20 justify-center ">
          {movies.slice(5, 10).map((movie) => (
            <MainCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};
