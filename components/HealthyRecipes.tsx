import { ArrowRight } from "lucide-react";
import React, { Suspense } from "react";
import { FaStar } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { TbClockHour3 } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import HealthyRecipesItem from "./HealthyRecipesItem";
import MainHealthyRecipes from "./skelettons/MainHealthyRecipes";

const HealthyRecipes = () => {
  const slug = "healthy-recipes";
  const limit = 6;
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center max-sm:mt-0 max-md:mt-8 p-4">
      <Link
        href="recipes"
        className="flex items-center gap-1 text-3xl font-bold"
      >
        Healthy Recipes <ArrowRight className="text-green-700" size={26} />
      </Link>

      <Suspense key={slug + limit} fallback={<MainHealthyRecipes />}>
        <HealthyRecipesItem slug={slug} lim={limit} />
      </Suspense>
    </div>
  );
};

export default HealthyRecipes;
