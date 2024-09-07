"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaFlipboard,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    pathname !== "/sign-in" &&
    pathname !== "/user-profile" &&
    pathname !== "/sign-up" && (
      <footer className="w-full flex flex-col items-center justify-center mx-auto">
        <div className="w-full bg-[#F2F2F2] py-12 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-around gap-12">
            <div className="flex flex-col items-start">
              <h2 className="text-4xl font-bold text-green-800 mb-8">
                HealthyFulRecipes
              </h2>
              <Button
                variant="ghost"
                className="border-[2px] py-3 px-8 rounded-none border-green-800 text-sm font-bold uppercase transition duration-200 ease-in-out hover:bg-green-800 hover:text-white"
              >
                NEWSLETTERS
              </Button>
              <div className="flex flex-col items-start mt-8 gap-4">
                <h3 className="font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-blue-800">
                    <FaFacebookF size={20} />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    <FaFlipboard size={20} />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    <FaPinterestP size={20} />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <FaXTwitter size={20} />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    <FaYoutube size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-8 lg:gap-12 lg:mt-16">
              <div className="flex flex-col items-start gap-4 text-sm font-semibold">
                <h3>HEALTHY RECIPES</h3>
                <h3>MEAL PLANS</h3>
                <h3>HEALTHY EATING</h3>
                <h3>HEALTHY COOKING</h3>
                <h3>HEALTHY LIFESTYLE</h3>
                <h3>SPECIAL DIETS</h3>
                <h3>DIABETES</h3>
                <h3>NEWS</h3>
              </div>
              <div className="flex flex-col items-start">
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  About Us
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Nutrition Guidelines
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Product Reviews
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Terms of Service
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Contact
                </Link>
                <Image
                  src="/assets/trust/seal.svg"
                  alt="trussite"
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="flex flex-col items-start">
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Diversity & Inclusion
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Privacy Policy
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Advertise
                </Link>
                <Link href="#" className="block mb-2 text-sm text-gray-600 ">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-4 px-4">
          <div className="flex max-sm:flex-col items-center gap-1 max-w-6xl  max-lg:text-center lg:ml-60">
            <Image
              src="/assets/trust/seal.svg"
              alt="trussite"
              width={80}
              height={80}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <p className="text-sm text-gray-600">
              EatingWell is part of the Dotdash Meredith publishing family.
            </p>
          </div>
        </div>
      </footer>
    )
  );
}
