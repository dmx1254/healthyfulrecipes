"use client";

import React, { useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchComp = ({ isSearchActive }: { isSearchActive: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchActive) {
      inputRef.current?.focus();
    }else {
        inputRef.current?.blur();
      }
  }, [isSearchActive]);
  return (
    <div className="w-full flex items-center justify-end gap-2">
      <span className="text-sm font-semibold">Search</span>
      <div className="flex items-center gap-0">
        <Input
          ref={inputRef}
          placeholder="What are you looking for?"
          className="w-[230px] outline-none text-sm rounded-none shadow-none border-black p-5"
        />
        <button className="flex items-center justify-center bg-green-900 text-white p-[14.5px] transition duration-150 hover:bg-black/80">
          <Search size={15} />
        </button>
      </div>
    </div>
  );
};

export default SearchComp;
