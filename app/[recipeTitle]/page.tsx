import { Separator } from "@/components/ui/separator";
import { Params } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const RecipeDetailPage = ({ params }: { params: Params }) => {
  const { recipeTitle } = params;
  console.log(recipeTitle);
  return (
    <div className="font-poppins w-full max-w-7xl flex flex-col items-center justify-center mx-auto p-4 my-12">
      <div className="flex flex-col items-start gap-8">
        <div className="w-full flex flex-col items-start gap-1">
          <p className="w-full text-3xl font-bold max-w-5xl">
            20 Slow-Cooker Chicken Dinners You Can Prep in 30 Minutes or Less
          </p>
          <div className="w-full flex max-sm:flex-col max-sm:items-start items-center justify-between">
            <div className="text-xs inline-flex gap-1 items-center">
              By{" "}
              <span className="font-lora font-bold border-b border-black/90">
                Sophie Miller
              </span>{" "}
              <Separator
                orientation="vertical"
                className="h-[12px] w-[0.5px]"
              />
              Published on September 1, 2024
            </div>

            <div className="flex items-center justify-center mt-4 gap-2">
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
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Image
            src="/assets/detail/detail1.webp"
            alt="detail"
            width={500}
            height={500}
            className="max-sm:w-full max-sm:h-auto"
          />
          <p className="max-w-[500px] mt-6 mb-3">
            With these chicken recipes, 30 minutes or less of prep earlier in
            the day can earn you delicious depth of flavor at dinnertime.
            Whether you want a warm, veggie-packed soup or a spicy and zesty
            rice or noodle dish, these slow-cooker meals are here to make the
            most out of your poultry without any unnecessary extra effort.
            Recipes like our Slow-Cooker Chicken & Pinto Bean Enchilada
            Casserole and Slow-Cooker Vegetable & Chicken Meatball Soup are easy
            to make and will have you looking forward to dinner.
          </p>
          <div className="flex items-start">
            <div className="flex flex-col items-start pr-2">
              <span className="text-xl font-semibold">01</span>
              <span className="text-[10px] text-gray-400 font-lora">0f 10</span>
            </div>
            <p className="pl-2 border-l border-gray-300 max-w-[500px] text-xl font-bold">
              Slow-Cooker Chicken & Pinto Bean Enchilada Casserole
            </p>
          </div>
          <button className="uppercase px-4 py-2 text-center bg-green-800 text-white transition duration-200 ease-in-out hover:bg-black/90 mt-3">
            View recipe
          </button>
        </div>

        <div className="flex flex-col items-start">
          <Image
            src="/assets/detail/detail2.webp"
            alt="detail"
            width={500}
            height={500}
            className="max-sm:w-full max-sm:h-auto"
          />
          <p className="max-w-[500px] mt-6 mb-3">
            What if you could have tender, slow-cooker chicken thighs and crisp
            Broccolini to feed four with 10 minutes of hands-on time and eight
            common ingredients? Now, you can, and here's the recipe to prove it.
            Garnish with fresh oregano leaves and additional kosher salt and
            black pepper, if desired.
          </p>
          <div className="flex items-start">
            <div className="flex flex-col items-start pr-2">
              <span className="text-xl font-semibold">02</span>
              <span className="text-[10px] text-gray-400 font-lora">0f 10</span>
            </div>
            <p className="pl-2 border-l border-gray-300 max-w-[500px] text-xl font-bold">
              Slow-Cooker Chicken & White Bean Stew
            </p>
          </div>
          <button className="uppercase px-4 py-2 text-center bg-green-800 text-white transition duration-200 ease-in-out hover:bg-black/90 mt-3">
            View recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
