import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { GenreDropdown } from "./GenreDropdown";
import { ModeToggle } from "./ThemeToggle";
export function Header() {
  return (
    <>
      <header className="w-full">
        <div className="max-w-[1280px] flex justify-between m-auto items-center py-3">
          <div>
            <img src="movie-z.png" className="h-5" />
          </div>
          <div className="flex gap-[12px]">
            <GenreDropdown />
            <div className="flex items-center">
              <Search className="-mr-8 w-4 h-4" />
              <Input className="pl-10 w-[379px]" placeholder="Search.." />
            </div>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
