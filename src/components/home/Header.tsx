import { Search } from "lucide-react";
import { GenreDropdown } from "./GenreDropdown";
import { ModeToggle } from "./ThemeToggle";
import { SearchSection } from "./SearchSection";
import Link from "next/link";
export function Header() {
  return (
    <>
      <header className="w-full mt-5 ">
        <div className="  w-full  flex justify-between  items-center py-3">
          <div>
            <Link href={`src/app/page`}>
              <img
                src="movie-z.png"
                className="
  w-[92px] h-5 ml-20"
              />
            </Link>
          </div>
          <div className="flex gap-[22px] ">
            <div>
              <GenreDropdown />
            </div>

            <div className=" flex items-center">
              <Search className="-mr-8 w-4 h-4" />
              <SearchSection />
            </div>
          </div>

          <div className=" mr-20">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
