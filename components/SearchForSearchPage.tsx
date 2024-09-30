"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";

// type SearchType = {
//   searchTerm: string;
//   handleChange: (term: string) => void;
// };

const SearchForSearchPage = ({ term }: { term: string }) => {
  const [searchTerm, setSearchTerm] = useState<string>(term);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearchChange = useDebouncedCallback((searchValue: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchValue) {
      params.set("q", searchValue);
    } else {
      params.delete("q", searchValue);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 600);

  return (
    <div className="w-full flex max-w-5xl flex-col items-start gap-2 select-none ml-0 lg:ml-10">
      <span className="text-base font-semibold">Search Results For</span>
      <div className="w-full relative flex items-center gap-0">
        <Input
          type="search"
          //   value={searchParams.q || ""}
          className="w-full max-w-3xl bg-white text-base pl-9 py-6 pr-6 border border-black/80 placeholder:text-gray-400 placeholder:text-lg outline-none focus-visible:outline-none focus-visible:ring-0"
          placeholder="search"
          defaultValue={searchParams.get("q")?.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchChange(e.target.value)
          }
        />
        <span className="absolute top-[33%] left-[1%] text-gray-400">
          <Search size={20} />
        </span>
        <button
          disabled={!searchTerm}
          className={clsx(
            "z-10 bg-green-800 text-white text-base p-3 rounded-tr rounded-br -ml-[71px]",
            {
              "opacity-80": !searchTerm,
            }
          )}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForSearchPage;
