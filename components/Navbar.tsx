"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircleUserRound, Search, X } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import NavLink from "./NavLink";
import SearchComp from "./SearchComp";
import Mobilesheet from "./MobileSheet";

const Navbar = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  useEffect(() => {
    const handleHeight = () => {
      const scrolling = window.scrollY;
      setScreenHeight(scrolling);
    };
    window.addEventListener("scroll", handleHeight);

    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });

  // useEffect(() => {
  //   if (screenHeight >= 30 && screenHeight <= 50) {
  //     window.scrollTo({
  //       top: 70,
  //       behavior: "smooth",
  //     });
  //   }

  //   if (screenHeight >= 50 && screenHeight <= 70) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [screenHeight]);

  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px 0px",
      }}
      className="sticky top-0 left-0 right-0 z-[50] bg-white select-none"
    >
      <div className="max-lg:hidden max-w-6xl z-50 bg-white flex flex-col gap-4 items-start mx-auto p-4 font-poppins">
        <div
          style={{
            // transform: screenHeight > 50 ? "translateY(-150px)" : "translateY(0px)",
            display: screenHeight >= 50 ? "none" : "flex",
          }}
          className="w-full flex items-center justify-between transition duration-300 ease-in-out"
        >
          {/* <Image
            src="/logorm.png"
            alt="healthyfulrecipes logo"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          /> */}
          <h2 className="logo-text text-4xl font-bold text-green-600 mb-4">
            HealthyFulRecipes
          </h2>

          <div className="flex items-center gap-2">
            {isSearchActive ? (
              ""
            ) : (
              <button onClick={() => setIsSearchActive(true)}>
                <Search size={20} className="text-gray-500" />
              </button>
            )}
            {isSearchActive ? (
              <>
                <SearchComp isSearchActive={isSearchActive} />
                <button onClick={() => setIsSearchActive(false)}>
                  <X size={22} className="text-gray-800" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Separator
                  orientation="vertical"
                  style={{
                    display: screenHeight >= 50 ? "none" : "flex",
                  }}
                />
                <div className="flex items-center gap-1.5">
                  <button>
                    <CircleUserRound size={20} className="text-gray-500" />
                  </button>
                  <span className="text-sm">Log In</span>
                </div>
                <Separator orientation="vertical" />
                <Link href="/newsletters" className="capitalize text-sm">
                  newsletters
                </Link>
                <Separator orientation="vertical" />
                <Link href="/sweepstakes" className="capitalize text-sm">
                  sweepstakes
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="max-lg:hidden flex items-center w-full">
          <h2
            className="logo-text text-2xl font-bold text-green-600 mb-1 mr-6"
            style={{
              display: screenHeight >= 50 ? "flex" : "none",
            }}
          >
            HealthyFulRecipes
          </h2>
          {isSearchActive && screenHeight >= 50 ? (
            <>
              <SearchComp isSearchActive={isSearchActive} />
              <button onClick={() => setIsSearchActive(false)}>
                <X size={22} className="text-gray-800 ml-2" />
              </button>
            </>
          ) : (
            <NavLink />
          )}
          {isSearchActive ? (
            ""
          ) : (
            <button
              className="mb-0.5 mr-5"
              style={{
                display: screenHeight >= 50 ? "flex" : "none",
              }}
            >
              <Search
                size={18}
                className="text-gray-500"
                onClick={() => setIsSearchActive(true)}
              />
            </button>
          )}
        </div>
      </div>
      <div className="flex lg:hidden w-full items-center justify-between p-4">
        <Mobilesheet />
        <h2 className="logo-text text-2xl font-bold text-green-600 mb-1 mr-6">
          HealthyFulRecipes
        </h2>
        <span className="invisible">n</span>
      </div>
    </div>
  );
};

export default Navbar;
