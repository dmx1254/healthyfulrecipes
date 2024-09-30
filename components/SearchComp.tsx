"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

const SearchComp = ({
  isSearchActive,
  handleHideSearch,
}: {
  isSearchActive: boolean;
  handleHideSearch: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const { replace } = useRouter();
  const pathname = usePathname();

  const paramsPage = new URLSearchParams(searchParams);

  useEffect(() => {
    if (isSearchActive) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [isSearchActive]);

  const handleSearch = (term: string) => {
    // console.log(term);
    setSearchTerm(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    // replace(`${pathname}?${params.toString()}`);
    // console.log(pathname)
    // console.log((`${pathname}?${params.toString()}`))
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };
  const handleChangePage = () => {
    handleHideSearch();
    router.push(`/search?${paramsPage.toString()}`);
  };

  return (
    <div className="w-full flex items-center justify-end gap-2">
      <span className="text-sm font-semibold">Search</span>
      <div className="flex items-center gap-0">
        <Input
          ref={inputRef}
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          className="w-[230px] border-[1.5px] outline-none text-sm rounded-none shadow-none border-zinc-900 p-5 focus:outline-none ring-offset-0 ring-0 focus-visible:outline-none focus-visible:ring-0"
        />
        <button
          disabled={!searchTerm}
          className={clsx(
            "flex items-center justify-center bg-green-900 text-white p-[14.5px] transition duration-150 hover:bg-black/80",
            {
              "opacity-70": !searchTerm,
            }
          )}
          onClick={handleChangePage}
        >
          <Search size={15} />
        </button>
      </div>
    </div>
  );
};

export default SearchComp;
