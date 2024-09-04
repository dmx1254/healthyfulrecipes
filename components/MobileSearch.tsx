import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const MobileSearch = () => {
  return (
    <div className="w-full flex-col items-start gap-2">
      <span className="text-sm font-semibold">Search</span>
      <div className="flex items-center gap-0">
        <Input
          
          placeholder="What are you looking for?"
          className="w-full outline-none text-sm rounded-none shadow-none border-black p-5"
        />
        <button className="flex items-center justify-center bg-green-900 text-white p-[14.5px] transition duration-150 hover:bg-black/80">
          <Search size={15} />
        </button>
      </div>
    </div>
  );
}

export default MobileSearch;
