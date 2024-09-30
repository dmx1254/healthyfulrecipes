import React, { Suspense } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { NewsPlansSkeleton } from "@/components/skelettons/NewsPlansSkeleton";
import BottomNewsSkeleton from "@/components/skelettons/BottomNewsSkeleton";
import HealthyEatingItem from "@/components/HealthyEatingItem";
import BottomHealthyEatingPost from "@/components/BottomHealthyEatingPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Eating",
  description: "Learn to eat healthy with our expert tips and delicious inspiration to help you prepare healthy food for you and your family.",
  keywords:["healthy eating", "balanced eating", "nutritious diet", "clean eating", "healthy food choices"],
  robots:{
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    nocache: true,
    noimageindex: false,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: false,
      nocache: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    }
  },
};


const HealthyEating = () => {
  const slug = "healthy-eating";
  const lim = 3;
  return (
    <div className="w-full max-w-6xl flex flex-col items-center mx-auto p-4">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">Healthy Eating</h2>
        <p className="w-full max-w-5xl text-center text-base/7">
          Learn to eat healthy with our expert tips and delicious inspiration to
          help you prepare healthy food for you and your family.
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
      <div className="flex max-sm:flex-col items-start gap-6 mb-14">
        <Suspense fallback={<NewsPlansSkeleton />}>
          <HealthyEatingItem slug={slug} lim={lim} />
        </Suspense>
      </div>

      <Suspense key={slug} fallback={<BottomNewsSkeleton />}>
        <BottomHealthyEatingPost slug={slug} />
      </Suspense>
    </div>
  
  );
};

export default HealthyEating;
