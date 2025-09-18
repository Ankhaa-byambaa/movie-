import { Search } from "lucide-react";
import { GenreDropdown } from "./GenreDropdown";
import { ModeToggle } from "./ThemeToggle";
import { SearchSection } from "./SearchSection";
export function Header() {
  return (
    <>
      <header className="w-full mt-5 ">
        <div className="  w-full  flex justify-between m-auto items-center py-3">
          <div>
            <img
              src="movie-z.png"
              className="
  w-[92px] h-5 ml-20"
            />
          </div>
          <div className="flex gap-[22px] max-[800px]:hidden max-[800px]:bg-amber-700 ">
            <div className=" max-[800px]:hidden">
              <GenreDropdown />
            </div>

            <div className="max-[800px]:invisible flex items-center">
              <Search className="-mr-8 w-4 h-4" />
              <SearchSection />
            </div>
          </div>
          <div className="px-3  min-[800px]:hidden">
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
