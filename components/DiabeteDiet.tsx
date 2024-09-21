import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";
import { Separator } from "./ui/separator";
import { FaStar } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";
import Link from "next/link";
import HomeDietDiabetesItem from "./HomeDietDiabetesItem";

const DiabeteDiet = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center bg-[#E4F1EF] p-4 mx-auto">
      <Link
        href="/diabetes-diet-center"
        className="flex items-center gap-1 text-3xl font-bold"
      >
        Diabets Diet Center <ArrowRight className="text-green-700" size={26} />
      </Link>

      <Suspense fallback={<span>Loading...</span>}>
        <HomeDietDiabetesItem />
      </Suspense>
      
    </div>
  );
};

export default DiabeteDiet;
