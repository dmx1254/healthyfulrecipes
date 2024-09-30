import React, { Suspense } from "react";
import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { NewsPlansSkeleton } from "@/components/skelettons/NewsPlansSkeleton";
import MealPlansItem from "@/components/MealPlansItem";
import BottomNewsSkeleton from "@/components/skelettons/BottomNewsSkeleton";
import BottomMealsPlansPost from "@/components/BottomMealsPlansPost";
// import { getPostId } from "@/lib/api/posts";

export const metadata: Metadata = {
  title: "Meal Plans",
  description: "Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber, go vegan and more. Browse dozens of meal plans to find one that's right for you.",
  keywords:["meal plans", "weekly meal plan", "healthy meal prep", "diet plan", "meal planning",],
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

const MealPlans = () => {
  const slug = "meal-plans";
  const lim = 3;
  return (
    <div className="w-full max-w-6xl flex flex-col items-center mx-auto p-4">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">Meal Plans</h2>
        <p className="text-center text-base/7">
          Our delicious meal plans are designed by registered dietitians and
          food experts to help you lose weight, eat more fiber, go vegan and
          more. Browse dozens of meal plans to find one that's right for you.
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
          <MealPlansItem slug={slug} lim={lim} />
        </Suspense>
      </div>

      <Suspense key={slug} fallback={<BottomNewsSkeleton />}>
        <BottomMealsPlansPost slug={slug} />
      </Suspense>
    </div>
  );
};

export default MealPlans;
