"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MobileSearch = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const paramsPage = new URLSearchParams(searchParams);
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
    router.push(`/search?${paramsPage.toString()}`);
    setOpen(false);
  };

  return (
    <div className="w-full flex-col items-start gap-2">
      <span className="text-sm font-semibold">Search</span>
      <div className="flex items-center gap-0">
        <Input
          placeholder="What are you looking for?"
          className="w-full outline-none text-sm rounded-none shadow-none border-black p-5 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
        <button
          className="flex items-center justify-center bg-green-900 text-white p-[14.5px] transition duration-150 hover:bg-black/80"
          onClick={handleChangePage}
        >
          <Search size={15} />
        </button>
      </div>
    </div>
  );
};

export default MobileSearch;
