import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import MealPlansItem from "./MealPlansItem";

const MealPlans = () => {
  const slug = "meal-plans";
  const lim = 3;
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center mx-auto p-4">
      <Link href="/meal-plans" className="flex items-center gap-1 text-3xl font-bold">
        Meal Plans <ArrowRight className="text-green-700" size={26} />
      </Link>
      <div className="w-full flex max-md:flex-col items-start gap-8 justify-between">
        <Suspense key={slug + lim} fallback={<span>Loading...</span>}>
          <MealPlansItem slug={slug} lim={lim} />
        </Suspense>
      </div>
    </div>
  );
};

export default MealPlans;
