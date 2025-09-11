export function Title() {
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
  //   color: var(--text-text-foreground, #09090B);

  // /* xsmall */
  // font-family: Inter;
  // font-size: 12px;
  // font-style: normal;
  //   color: var(--text-text-muted-foreground, #71717A);

  // /* Font Sizes/text-xs */
  // font-family: Inter;
  // font-size: 12px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: 16px; /* 133.333% */
  // font-weight: 500;
  // line-height: 16px; /* 133.333% */

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="text-9 text-[#09090B] text-bold flex flex-col gap-[2px]">
          wicked
          <p className=" text-[18px] text-[#09090B]">
            2024.11.26 · PG · 2h 40m
          </p>
        </div>
        <div className=" w-[83px] ">
          <div className=" text-[#09090B] text-3 ">Rating</div>
          <div className="flex flex-col items-center">
            <img className="w-7" src={"star.svg"} />
            <div className="">
              {/* {vote_average} */}6.9
              <p className=" text-[#71717A] text-4">/10</p>
              <p className=" text-[#71717A] text-3">37k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
