import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, CircleUserRound } from "lucide-react";
import MobileSearch from "./MobileSearch";
import MobileAccordion from "./MobileAccordion";
import { navUrls } from "@/lib/data";
import Link from "next/link";

import {
  FaFacebookF,
  FaFlipboard,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Mobilesheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col items-start mx-auto h-full overflow-y-auto"
      >
        <div className="w-full flex flex-col items-start gap-6">
          <MobileSearch />
        </div>
        <div className="w-full flex flex-col items-start gap-1.5">
          {navUrls.map((nav) => (
            <MobileAccordion key={nav.id} nav={nav} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-4 my-4">
          <button className="flex items-center gap-2">
            <CircleUserRound size={20} className="text-gray-500" />
            <span className="text-sm">Log In</span>
          </button>
          <Link href="/newsletters" className="capitalize text-sm">
            newsletters
          </Link>
          <Link href="/sweepstakes" className="capitalize text-sm">
            sweepstakes
          </Link>
        </div>
        <div className="w-full flex items-center justify-between">
          <h3 className="text-sm">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-blue-800">
              <FaFacebookF size={18} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-red-800">
              <FaFlipboard size={18} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600">
              <FaInstagram size={18} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">
              <FaPinterestP size={18} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <FaXTwitter size={18} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-red-600">
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilesheet;
