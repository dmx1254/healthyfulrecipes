import React, { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";

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
import HealthyLifeStyleItem from "@/components/HealthyLifeStyleItem";
import BottomHealthyLifestylePost from "@/components/BottomHealthyLifestylePost";

const HealthyLifestyle = () => {
  const slug = "healthy-lifestyle";
  const lim = 3;
  return (
    <div className="w-full max-w-6xl flex flex-col items-center mx-auto p-4">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">Healthy Lifestyle</h2>
        <p className="w-full max-w-5xl text-center text-base/7">
          Learn how to not only eat healthy, but live a well-rounded, healthy /
          lifestyle with our expert tips and inspirational stories.
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
          <HealthyLifeStyleItem slug={slug} lim={lim} />
        </Suspense>
      </div>

      <Suspense key={slug} fallback={<BottomNewsSkeleton />}>
        <BottomHealthyLifestylePost slug={slug} />
      </Suspense>
    </div>
    // return (
    //   <div className="font-poppins w-full max-w-6xl flex flex-col items-center mx-auto p-4">
    //     <div className="w-full flex flex-col items-center gap-2">
    //       <h2 className="text-4xl font-bold">Healthy Lifestyle</h2>
    //       <p className="text-center">
    //         Learn how to not only eat healthy, but live a well-rounded, healthy
    //         lifestyle with our expert tips and inspirational stories.
    //       </p>
    //       <div className="mt-4 text-center text-sm/10">
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Healthy Habits
    //         </span>
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Exercise
    //         </span>
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Sustainability
    //         </span>
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Healthy Pets
    //         </span>
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Entertaining
    //         </span>
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Kitchen Essentials
    //         </span>
    //         <span className="uppercase text-gray-800 font-semibold mx-6">
    //           Future of Food
    //         </span>
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center my-4 gap-2">
    //       {" "}
    //       <Link
    //         href="#"
    //         className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-red-600 hover:border-zinc-800"
    //       >
    //         <FaPinterestP size={18} />
    //       </Link>
    //       <Link
    //         href="#"
    //         className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-blue-600 hover:border-zinc-800"
    //       >
    //         <FaFacebookF size={18} />
    //       </Link>
    //       <Link
    //         href="#"
    //         className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-black hover:border-zinc-800"
    //       >
    //         <FaXTwitter size={18} />
    //       </Link>
    //       <Link
    //         href="#"
    //         className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-zinc-800 hover:border-zinc-800"
    //       >
    //         <IoMdMail size={18} />
    //       </Link>
    //     </div>
    //     <div className="flex max-sm:flex-col items-start gap-6">
    //       <div className="max-sm:w-full flex flex-col items-start gap-4 pt-4">
    //         <Image
    //           src="/assets/recipes/recipes7.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={400}
    //           height={400}
    //           className="max-sm:w-full max-sm:h-auto"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2">
    //           <p className="text-xs text-zinc-500">Healthy Tofu Recipes</p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[400px]">
    //             Honey-Chipotle Tofu Bites Are Sweet & Spicy Perfection
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" /> 45 mins
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">By Julia Levy</p>
    //         </div>
    //       </div>
    //       <div className="max-sm:w-full flex flex-col items-start gap-4 pt-4">
    //         <Image
    //           src="/assets/recipes/recipes8.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={400}
    //           height={400}
    //           className="max-sm:w-full max-sm:h-auto"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2">
    //           <p className="text-xs text-zinc-500">Healthy Cauliflower Recipes</p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[400px]">
    //             Carolina Gelen's Shaved Cauliflower Salad with Lemon Vinaigrette &
    //             Parmesan
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" /> 20 mins
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">By Carolina Gelen</p>
    //         </div>
    //       </div>
    //       <div className="max-sm:w-full flex flex-col items-start gap-4 pt-4">
    //         <Image
    //           src="/assets/recipes/recipes9.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={400}
    //           height={400}
    //           className="max-sm:w-full max-sm:h-auto"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 p-2">
    //           <p className="text-xs text-zinc-500">Healthy Muffin Recipes</p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[400px]">
    //             21 Healthy Muffin Recipes That Are Perfect For Back-To-School
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" /> 1hrs 15 mins
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full my-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat1.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <p className="text-lg sm:text-xl font-bold w-full lg:max-w-[300px]">
    //             Heart-Healthy Casserole Recipes
    //           </p>

    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>
    //       <div className="max-sm:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat2.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <p className="text-lg sm:text-xl font-bold w-full lg:max-w-[300px]">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>
    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat3.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[300px]">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" />
    //               40 mins
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>
    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat4.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[300px]">
    //             Heart-Healthy Casserole Recipes
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" /> 1hrs 15 mins
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>

    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat5.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">
    //             Healthy Breakfast Meal Prep Recipes
    //           </p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[300px]">
    //             16 Make-Ahead Breakfast Recipes With 5 Ingredients Or Less
    //           </p>

    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>
    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat6.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">Diabetes-Friendly Dinners</p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[300px]">
    //             20 20-Minute Dinners For Better Blood Sugar
    //           </p>

    //           <p className="font-lora text-xs text-zinc-500">
    //             By Camryn Alexa Wimberly
    //           </p>
    //         </div>
    //       </div>
    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500">
    //         <Image
    //           src="/assets/recipes/recipe-cat7.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">Healthy Oat Recipes</p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[300px]">
    //             Cranberry-Orange Energy Balls Are the Perfect High-Fiber Fall
    //             Snack
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" />
    //               30 mins
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">
    //             By Amanda Holstein
    //           </p>
    //         </div>
    //       </div>
    //       <div className="max-lg:w-full flex lg:flex-col items-start gap-4 max-lg:border-none border border-zinc-500 max-sm:border-b max-sm:pb-4 max-sm:border-gray-600">
    //         <Image
    //           src="/assets/recipes/recipe-cat8.webp"
    //           alt="a recipe photo of the Potato Curry"
    //           width={300}
    //           height={300}
    //           className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
    //           style={{
    //             objectFit: "cover",
    //             objectPosition: "center",
    //           }}
    //         />
    //         <div className="flex flex-col items-start gap-2 lg:p-2">
    //           <p className="text-xs text-zinc-500">
    //             Healthy Chicken Casserole Recipes
    //           </p>
    //           <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[300px]">
    //             Creamy Chicken Florentine Casserole Is the Ultimate Comfort Food
    //           </p>
    //           <div className="flex gap-2 items-center">
    //             <span className="flex items-center gap-[1px] text-green-700">
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //               <FaStar />
    //             </span>
    //             <Separator
    //               orientation="vertical"
    //               className="h-[18px] w-[0.5px] bg-gray-400"
    //             />
    //             <span className="flex items-center gap-1 text-xs text-zinc-500">
    //               <TbClockHour3 className="text-green-700" /> 1hr
    //             </span>
    //           </div>
    //           <p className="font-lora text-xs text-zinc-500">By Julia Levy</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default HealthyLifestyle;
