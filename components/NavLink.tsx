"use client";

import React, { useState } from "react";
import { navUrls } from "@/lib/data";
import Link from "next/link";
import { SubCatUrl } from "@/lib/type";

const NavLink = () => {
  const [item, setItem] = useState<string>("");
  const [subcategories, setSubcategories] = useState<SubCatUrl[] | null>(null);
  //   console.log(subcategories);
  const handleMouseRecupTitle = (id: string) => {
    // console.log(id);
    setItem(id);
    const subcatFiltered = navUrls.find((nav) => nav.id === id);
    if (subcatFiltered?.subcategory) {
      setSubcategories(subcatFiltered?.subcategory);
    }
  };
  const handleResetNavAndItem = () => {
    setSubcategories(null);
    setItem("");
  };

  return (
    <div className="w-full flex items-center gap-4">
      {navUrls.map(({ id, title, linkUrl }) => (
        <div
          key={id}
          className="relative flex flex-col"
          onMouseEnter={() => handleMouseRecupTitle(id)}
          onMouseLeave={handleResetNavAndItem}
        >
          <Link className="font-[500] text-sm uppercase" href={`/${linkUrl}`}>
            {title}
          </Link>
          {id === item ? (
            <div
              className="flex flex-col z-10 items-start gap-6 pt-6 px-4 pb-4 mx-4 bg-white absolute min-w-[220px] top-[100%] left-[-40%] rounded"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
              onMouseEnter={() => handleMouseRecupTitle(id)}
              onMouseLeave={handleResetNavAndItem}
            >
              {subcategories?.map(({ name, subCatUrl, subCatId }) => (
                <Link
                  className="w-full text-sm text-gray-600"
                  key={name}
                  href={`/${linkUrl}/${subCatId}/${subCatUrl}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default NavLink;
