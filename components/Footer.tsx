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
import NewsLetterDialog from "./NewsLetterDialog";

export default function Footer() {
  const pathname = usePathname();
  return (
    pathname !== "/sign-in" &&
    pathname !== "/user-profile" &&
    pathname !== "/sign-up" && (
      <footer className="w-full flex flex-col items-center justify-center mx-auto select-none">
        <div className="w-full bg-[#F2F2F2] py-12 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-around gap-12">
            <div className="flex flex-col items-start">
              <Image
                src="/healthyfulrecipes-logo.png"
                alt="healthyfulrecipes logo"
                width={150}
                height={150}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="w-[115] h-[50px] mb-8"
              />
              <NewsLetterDialog />
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
                <Link href="/recipes">HEALTHY RECIPES</Link>
                <Link href="/meal-plans">MEAL PLANS</Link>
                <Link href="healthy-eating">HEALTHY EATING</Link>
                <Link href="/healthy-lifestyle">HEALTHY LIFESTYLE</Link>
                <Link href="/special-diets">SPECIAL DIETS</Link>
                <Link href="/diabetes-diet-center">DIABETES</Link>
                <Link href="/news">NEWS</Link>
                <Link href="/article">ARTICLES</Link>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  href="/about-us"
                  className="block mb-2 text-sm text-gray-600 "
                >
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
              HealthyFulRecipes is your partner in creating vibrant, wholesome
              meals that bring joy to every bite.
            </p>
          </div>
        </div>
      </footer>
    )
  );
}
