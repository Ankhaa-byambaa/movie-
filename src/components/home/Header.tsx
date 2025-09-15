import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { GenreDropdown } from "./GenreDropdown";
import { ModeToggle } from "./ThemeToggle";
export function Header() {
  return (
    <>
      <header className="w-full ">
        <div className="  w-full  flex justify-between m-auto items-center py-3">
          <div>
            <img
              src="movie-z.png"
              className="
 max-[800px]:ml-5 h-5 w-[64px] ml-20 "
            />
          </div>
          <div className="flex gap-[22px] max-[800px]:gap-3 ">
            <div className=" max-[800px]:invisible">
              <GenreDropdown />
            </div>

            <div className="max-[800px]:invisible flex items-center">
              <Search className="-mr-8 w-4 h-4" />
              <Input className=" pl-10 w-[379px]" placeholder="Search.." />
            </div>
          </div>
          <div className="px-3  min-[800px]:invisible">
            <GenreDropdown />
          </div>
          <div className="max-[375px]:mr-5 mr-20">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
