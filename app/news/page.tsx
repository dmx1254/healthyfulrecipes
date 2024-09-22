import React, { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import NewsItem from "@/components/NewsItem";
import { MainNewsSkeletons } from "@/components/skelettons/MainNewsSkeletons";
import BottomNewsItem from "@/components/BottomNewsItem";
import BottomNewsSkeleton from "@/components/skelettons/BottomNewsSkeleton";

const NewsPage = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col items-center mx-auto p-4">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">News</h2>
        <p className="text-center text-base/7">
          HealthyFulRecipes covers what's happening in the world of food &
          nutrition news. You'll find our expert take on the latest health
          studies, food recalls, new grocery items and products we're loving
          right now, people doing good things in the world of food, and so much
          more. Our science-based journalism will help you make better-informed
          food choices.
        </p>
        {/* <div className="mt-4 text-center text-sm/10">
          <span className="uppercase text-gray-800 font-semibold mx-6">
            Diabetes-Friendly Dinner Recipes
          </span>
          <span className="uppercase text-gray-800 font-semibold mx-6">
            Best of the Best
          </span>
          <span className="uppercase text-gray-800 font-semibold mx-6">
            Healthy Side Dish Recipes
          </span>
          <span className="uppercase text-gray-800 font-semibold mx-6">
            Healthy Salad Recipes
          </span>
        </div> */}
      </div>
      <div className="flex items-center justify-center my-6 gap-2">
        {" "}
        <Link
          href="#"
          className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-red-600 hover:border-zinc-800"
        >
          <FaPinterestP size={18} />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-blue-600 hover:border-zinc-800"
        >
          <FaFacebookF size={18} />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-black hover:border-zinc-800"
        >
          <FaXTwitter size={18} />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-zinc-800 hover:border-zinc-800"
        >
          <IoMdMail size={18} />
        </Link>
      </div>
      <div className="flex max-sm:flex-col items-start gap-6">
        <Suspense fallback={<MainNewsSkeletons />}>
          <NewsItem />
        </Suspense>
      </div>

      <Suspense fallback={<BottomNewsSkeleton />}>
        <BottomNewsItem />
      </Suspense>
    </div>
  );
};

export default NewsPage;
