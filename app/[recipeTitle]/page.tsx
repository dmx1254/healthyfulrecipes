import { Separator } from "@/components/ui/separator";
import { Params } from "@/lib/type";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaPinterestP, FaStar, FaRegStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdShareAlt } from "react-icons/io";
import { MdLocalPrintshop } from "react-icons/md";

import { BiSolidDish } from "react-icons/bi";

const RecipeDetailPage = ({ params }: { params: Params }) => {
  const { recipeTitle } = params;
  return (
    <div className="font-poppins w-full max-w-7xl flex flex-col items-center justify-center mx-auto p-4 my-6 sm:my-12">
      <div className="flex flex-col items-start max-w-xl gap-4">
        <div className="w-full">
          <p className="text-3xl font-bold">
            The High-Protein Dip Formula That Will Help You Eat More Produce
          </p>
        </div>
        <div className="w-full inline-flex items-center gap-2">
          <div className="flex font-lora">
            <div className="inline-flex gap-0">
              <FaStar size={16} className="text-green-900" />
              <FaStar size={16} className="text-green-900" />
              <FaStar size={16} className="text-green-900" />
              <FaStar size={16} className="text-green-900" />
              <FaRegStar size={16} />
            </div>
            <span className="text-sm mx-1">4.0</span>
            <span className="text-gray-500 text-sm">(4)</span>
          </div>
          <Separator orientation="vertical" className="h-[16px] w-[0.5px]" />
          <span className="text-sm uppercase font-semibold">2 reviews</span>
        </div>
        <div className="w-full">
          <p className="w-full text-sm/6">
            These high-protein cottage cheese dips are easy to whip up and pair
            perfectly with your favorite fruits and veggies. Whether you’re in
            the mood for something sweet or savory, these recipes will keep you
            full and energized while squeezing in an extra serving of veggies.
          </p>
        </div>
        <div className="text-xs inline-flex gap-1 items-center">
          By{" "}
          <span className="font-lora font-bold border-b border-black/90">
            Sophie Miller
          </span>{" "}
          <Separator
            orientation="vertical"
            className="h-[14px] w-[0.5px] bg-gray-200"
          />
          Published on September 1, 2024
        </div>
        <div className="flex items-center p-3 bg-[#E4F1EF]">
          <button className="inline-flex gap-1 uppercase text-sm font-[500]">
            Rate <Star size={16} className="text-green-900" />
          </button>
          <Separator
            orientation="vertical"
            className="h-[16px] w-[0.5px] mx-2 bg-gray-400"
          />
          <button className="inline-flex gap-1 uppercase text-sm font-[500]">
            Print
            <MdLocalPrintshop size={16} className="text-green-900" />
          </button>
          <Separator
            orientation="vertical"
            className="h-[16px] w-[0.5px] mx-2 bg-gray-400"
          />
          <button className="inline-flex gap-1 uppercase text-sm font-[500]">
            Share
            <IoMdShareAlt size={16} className="text-green-900" />
          </button>
        </div>
        <div className="w-full my-2">
          <Image
            src="/assets/detail/detail3.webp"
            alt="Recipes image details"
            height={400}
            width={400}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex flex-col items-start p-4 bg-[#E4F1EF]">
          <div className="w-full flex items-center justify-between pb-4 border-b border-gray-300">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">Active Time:</span>
              <span className="text-sm font-normal">5 mins</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">Total Time:</span>
              <span className="text-sm font-normal">5 mins</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">Servings:</span>
              <span className="text-sm font-normal">8</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 items-start pt-4">
            <span className="text-sm font-semibold">Nutrition Profile:</span>
            <div className="flex flex-wrap gap-4">
              <span className="text-sm font-normal">No Added Sugar</span>
              <span className="text-sm font-normal">Sesame-Free</span>
              <span className="text-sm font-normal">Weight Loss</span>
              <span className="text-sm font-normal">Diabetes-Friendly</span>
              <span className="text-sm font-normal">Soy-Free</span>
              <span className="text-sm font-normal">Vegetarian</span>
              <span className="text-sm font-normal">High-Protein</span>
              <span className="text-sm font-normal">Egg-Free</span>
              <span className="text-sm font-normal">Gluten-Free</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="w-full text-sm/6">
            Looking to add more protein to your diet and increase your fruit and
            vegetable intake? These high-protein dips, featuring cottage cheese
            as a base, are delicious, easy to make and perfect for pairing with
            your favorite produce. Whether you’re craving something sweet or
            savory, these recipes will satisfy your taste buds and keep you
            feeling full and energized.
          </p>
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-3xl font-bold">
              How to Make a High-Protein Dip
            </h4>
            <p className="relative w-full text-sm/6">
              <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[7%] left-[-1%]" />
              Base: Start with 2 cups of cottage cheese. You can use full-fat,
              low-fat or nonfat cottage cheese depending on your calorie and fat
              intake preferences. Cottage cheese is an excellent source of
              protein and has a relatively low carbohydrate content, making it
              ideal for those managing their blood sugar levels.
            </p>
            <p className="relative w-full text-sm/6 mt-2">
              <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[7%] left-[-1%]" />
              Flavor Enhancers: Fresh herbs, like dill, basil or cilantro, and
              spices such as paprika and cumin can add a burst of flavor without
              adding additional calories or sugar. A squeeze of lemon juice or a
              teaspoon of lime zest can also add flavor and brighten up your
              dip.
            </p>
            <p className="relative w-full text-sm/6 mt-2">
              <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[7%] left-[-1%]" />
              Additional Ingredients: Ingredients like nuts, avocado, olive oil
              and nut butters can add flavor and a source of healthy fats that
              can help with satiety and nutrient absorption. You can also add
              finely chopped veggies like bell peppers, cucumbers, or spinach
              for texture and flavor as well as a boost of fiber and nutrients.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-start my-8">
          <h4 className="text-3xl font-bold mb-2">Ingredients</h4>
          <p className="relative w-full text-sm/6 mt-2">
            <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[50%] translate-y-[-50%] left-[-1.5%]" />
            2 cups nonfat cottage cheese
          </p>
          <p className="relative w-full text-sm/6 mt-2">
            <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[50%] translate-y-[-50%] left-[-1.5%]" />
            3 tablespoons pesto
          </p>
          <p className="relative w-full text-sm/6 mt-2">
            <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[50%] translate-y-[-50%] left-[-1.5%]" />
            2 tablespoons grated Parmesan cheese
          </p>
          <p className="relative w-full text-sm/6 mt-2">
            <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[50%] translate-y-[-50%] left-[-1.5%]" />
            3 cups mini bell peppers or sliced bell peppers
          </p>
        </div>
        <div className="w-full flex flex-col items-start p-4 bg-[#E4F1EF]">
          <h3 className="text-xl font-semibold">Nutrition Information</h3>
          <p className="my-6 text-sm font-normal">
            Serving Size: ¼ cup dip & about ⅓ cup peppers
          </p>
          <p className="text-sm font-normal">
            Calories 75, Fat 3g, Saturated Fat 1g, Cholesterol 4mg,
            Carbohydrates 5g, Total Sugars 4g, Added Sugars 0g, Protein 7g,
            Fiber 1g, Sodium 286mg, Potassium 87mg
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 mt-12">
          <p className="text-3xl font-bold mb-2">Reviews (2)</p>
          <div className="w-full bg-[#E4F1EF]">
            <div className="flex flex-col items-start bg-white rounded p-4 gap-4 m-4">
              <div className="w-full flex items-center gap-2">
                <span className="flex items-center justify-center bg-[#D68133] text-white rounded-full p-3">
                  <BiSolidDish size={24} />
                </span>
                <p className="flex-1 font-semibold">
                  The High-Protein Dip Formula That Will Help You Eat More
                  Produce
                </p>
              </div>
              <div className="flex-flex-col items-start gap-2">
                <div>
                  <span className="text-sm font-semibold">My rating</span>
                  <span className="text-xs text-zinc-400 ml-2">(required)</span>
                </div>
                <div className="inline-flex items-center gap-0 mt-2">
                  <button className="outline-none text-zinc-500">
                    <FaRegStar size={26} />
                  </button>
                  <button className="outline-none text-zinc-500">
                    <FaRegStar size={26} />
                  </button>
                  <button className="outline-none text-zinc-500">
                    <FaRegStar size={26} />
                  </button>
                  <button className="outline-none text-zinc-500">
                    <FaRegStar size={26} />
                  </button>
                  <button className="outline-none text-zinc-500">
                    <FaRegStar size={26} />
                  </button>
                  <Separator
                    orientation="vertical"
                    className="h-[28px] w-[0.5px] bg-gray-300 mx-3"
                  />
                  <span className="text-sm"> Love it.</span>
                </div>
              </div>
              <button className="max-sm:w-full flex items-center justify-center text-center text-sm px-4 py-2 bg-green-800 text-white uppercase self-end font-semibold transition duration-200 ease-in-out hover:bg-black/90">
                Submit
              </button>
              {/* <div></div>
              <div></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-start gap-8">
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
      </div> */}
    </div>
  );
};

export default RecipeDetailPage;
