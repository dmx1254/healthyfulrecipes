import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import HomeLifestyleItem from "./HomeLifestyleItem";

const HealthyLifestyle = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center p-4">
      <Link
        href="/healthy-lifestyle"
        className="flex items-center gap-1 text-3xl font-bold"
      >
        Healthy Lifestyle <ArrowRight className="text-green-700" size={26} />
      </Link>
      <div className="w-full flex max-md:flex-col max-md:items-center items-start gap-8 justify-between">
        <Suspense fallback={<span>Loading...</span>}>
          <HomeLifestyleItem />
        </Suspense>
      </div>
    </div>
  );
};

export default HealthyLifestyle;
