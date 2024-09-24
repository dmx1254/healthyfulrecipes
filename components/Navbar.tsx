"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircleUserRound, Search, X } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import NavLink from "./NavLink";
import SearchComp from "./SearchComp";
import Mobilesheet from "./MobileSheet";
import { usePathname } from "next/navigation";

import { SignOutButton } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";
import { GoTriangleDown } from "react-icons/go";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const pathname = usePathname();

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
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" && (
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
            <Link href="/">
              <Image
                src="/healthyfulrecipes-logo.png"
                alt="healthyfulrecipes logo"
                width={150}
                height={150}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="w-[115] h-[50px]"
              />
            </Link>

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
                  <Separator orientation="vertical" />
                  {isSignedIn ? (
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-1.5 cursor-pointer">
                          <Image
                            src="/defaultUser.png"
                            alt="user profile"
                            width={20}
                            height={20}
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            className="rounded-full"
                          />
                          <span className="flex text-xs items-center gap-1">
                            My Account <GoTriangleDown />
                          </span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-44 shadow-xl select-none cursor-pointer">
                        <SignOutButton>Log Out</SignOutButton>
                      </HoverCardContent>
                    </HoverCard>
                  ) : (
                    <Link href="/sign-in" className="flex items-center gap-1.5">
                      <button>
                        <CircleUserRound size={20} className="text-gray-500" />
                      </button>
                      <span className="text-sm">Log In</span>
                    </Link>
                  )}

                  <Separator orientation="vertical" />
                  <Link href="#newsletter" className="capitalize text-xs">
                    newsletters
                  </Link>
                  <Separator orientation="vertical" />
                  <Link href="/sweepstakes" className="capitalize text-xs">
                    sweepstakes
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="max-lg:hidden flex items-center w-full">
            <Link href="/">
              <Image
                src="/healthyfulrecipes-logo.png"
                alt="healthyfulrecipes logo"
                width={150}
                height={150}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  display: screenHeight >= 50 ? "flex" : "none",
                }}
                className="w-[115] h-[50px]"
              />
            </Link>
            {isSearchActive && screenHeight >= 50 ? (
              <>
                <SearchComp isSearchActive={isSearchActive} />
                <button onClick={() => setIsSearchActive(false)}>
                  <X size={22} className="text-gray-800 ml-2" />
                </button>
              </>
            ) : (
              <NavLink screenHeight={screenHeight} />
            )}
            {isSearchActive ? (
              ""
            ) : (
              <button
                className="-mb-1 mr-32"
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
          <Link href="/">
            <Image
              src="/healthyfulrecipes-logo.png"
              alt="healthyfulrecipes logo"
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-[115] h-[50px]"
            />
          </Link>
          <div className="">
            {isSignedIn ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <Image
                      src="/defaultUser.png"
                      alt="user profile"
                      width={20}
                      height={20}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="rounded-full"
                    />
                    <span className="flex text-xs items-center gap-1 max-sm:hidden">
                      My Account <GoTriangleDown />
                    </span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-44 shadow-xl select-none cursor-pointer">
                  <SignOutButton>Log Out</SignOutButton>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <span className="invisible">n</span>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
