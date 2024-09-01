import Image from "next/image";
import React from "react";
import { CircleUserRound, Search } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px 0px",
      }}
    >
      <div className="max-w-7xl z-50 bg-white flex flex-col gap-4 items-start mx-auto p-4 font-poppins">
        <div className="flex w-full items-center justify-between">
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
          <span className="logo-text">HealthyFulRecipes</span>
          <div className="flex items-center gap-2">
            <button>
              <Search size={22} className="text-gray-500" />
            </button>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-1">
              <button>
                <CircleUserRound size={22} className="text-gray-500" />
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
        </div>
        <div className="w-full">
          <NavLink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
