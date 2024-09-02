import { ArrowRight } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { TbClockHour3 } from "react-icons/tb";
import Image from "next/image";

const HealthyRecipes = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center p-4">
      <h2 className="flex items-center gap-1 text-3xl font-bold">
        Healthy Recipes <ArrowRight className="text-green-700" size={26} />
      </h2>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-start gap-4 border-b pb-8 border-gray-300">
          <Image
            src="/assets/recipes/recipe1.webp"
            alt="a recipe photo of the Potato Curry"
            width={230}
            height={230}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500">
              Healthy Curry Main Dish Recipes
            </p>
            <p className="text-xl font-bold max-w-[500px]">
              One-Pot Potato Curry Is Like a Hug in a Bowl
            </p>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-[1px] text-green-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <Separator
                orientation="vertical"
                className="h-[18px] w-[0.5px] bg-gray-400"
              />
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <TbClockHour3 className="text-green-700" /> 35 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">
              By Renu Anshie Dhar
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 pt-4 border-b pb-8 border-gray-300">
          <Image
            src="/assets/recipes/recipe2.webp"
            alt="a recipe photo of the Potato Curry"
            width={230}
            height={230}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500">
              Healthy Pasta Main Dish Recipes
            </p>
            <p className="text-xl font-bold max-w-[500px]">
              Baked Feta-Mushroom Pasta Is Pure Comfort in a Bowl
            </p>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-[1px] text-green-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <Separator
                orientation="vertical"
                className="h-[18px] w-[0.5px] bg-gray-400"
              />
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <TbClockHour3 className="text-green-700" /> 1hr 25 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">
              By Amanda Holstein
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 pt-4 border-b pb-8 border-gray-300">
          <Image
            src="/assets/recipes/recipe3.webp"
            alt="a recipe photo of the Potato Curry"
            width={230}
            height={230}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500">
              Healthy Portobello Mushroom Recipes
            </p>
            <p className="text-xl font-bold max-w-[500px]">
              Garlic-Butter Mushroom Steaks Are the Best Way to Eat Mushrooms
            </p>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-[1px] text-green-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <Separator
                orientation="vertical"
                className="h-[18px] w-[0.5px] bg-gray-400"
              />
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <TbClockHour3 className="text-green-700" /> 15 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">By Jasmine Smith</p>
          </div>
        </div>
        <div className="flex items-start gap-4 pt-4 border-b pb-8 border-gray-300">
          <Image
            src="/assets/recipes/recipe4.webp"
            alt="a recipe photo of the Potato Curry"
            width={230}
            height={230}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500">Overnight Oatmeal</p>
            <p className="text-xl font-bold max-w-[500px]">
              High-Protein Peanut Butter, Banana & Blueberry Overnight Oats
            </p>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-[1px] text-green-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <Separator
                orientation="vertical"
                className="h-[18px] w-[0.5px] bg-gray-400"
              />
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <TbClockHour3 className="text-green-700" /> 8hrs 10 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">By Carolyn Casner</p>
          </div>
        </div>
        <div className="flex items-start gap-4 pt-4 border-b pb-8 border-gray-300">
          <Image
            src="/assets/recipes/recipe5.webp"
            alt="a recipe photo of the Potato Curry"
            width={230}
            height={230}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500">Healthy Broccoli Recipes</p>
            <p className="text-xl font-bold max-w-[500px]">
              Loaded Broccoli Steaks
            </p>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-[1px] text-green-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <Separator
                orientation="vertical"
                className="h-[18px] w-[0.5px] bg-gray-400"
              />
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <TbClockHour3 className="text-green-700" /> 40 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">By Jasmine Smith</p>
          </div>
        </div>
        <div className="flex items-start gap-4 pt-4">
          <Image
            src="/assets/recipes/recipe6.webp"
            alt="a recipe photo of the Potato Curry"
            width={230}
            height={230}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500">Healthy Potato Recipes</p>
            <p className="text-xl font-bold max-w-[500px]">
              Garlic-Parmesan-Rosemary Bubble Potatoes Are "Delightfully Crispy"
            </p>
            <div className="flex gap-2 items-center">
              <span className="flex items-center gap-[1px] text-green-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <Separator
                orientation="vertical"
                className="h-[18px] w-[0.5px] bg-gray-400"
              />
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <TbClockHour3 className="text-green-700" /> 40 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">By Julia Levy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyRecipes;
