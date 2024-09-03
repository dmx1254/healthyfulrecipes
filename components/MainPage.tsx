import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const MainPage = () => {
  return (
    <div className="w-full flex items-start max-w-6xl max-lg:flex-col gap-8">
      <div className="flex flex-col items-start gap-2 max-lg:self-center p-0 md:p-4">
        <img
          src="/assets/foods/maindishe.jpg"
          alt="Butternet Squash Steaks"
         className="w-screen h-[350] md:w-[700px] md:h-[500px] object-cover object-center"
        />
        <div className="flex flex-col items-start gap-2 max-md:p-4">
          <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal max-w-[700px]">
            Healthy butternut recipes
          </p>
          <p className="text-2xl font-bold whitespace-normal max-w-[700px]">
            Marry Me Butternut Squash Steaks
          </p>
          <p className="text-sm max-w-[700px]">
            Savor this plant-based take on Marry Me Chicken, featuring butternut
            squash steaks in place of chicken, all nestled in a creamy sun-dried
            tomato sauce.
          </p>
        </div>
      </div>
      <div className="flex max-lg:w-full max-lg:max-w-[700px] max-lg:self-center flex-col items-start gap-2 max-md:p-4">
        <h2 className="relative text-3xl italic text-black/95 thelatest-title mb-2">
          The Latest
        </h2>
        <div className="max-lg:w-full flex flex-col items-start gap-2">
          <div className="max-lg:w-full flex items-start gap-2 border-b border-gray-200 pb-4">
            <Image
              src="/assets/foods/sub1dishe.jpg"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <div className="whitespace-normal text-xs text-zinc-500 uppercase w-full md:max-w-[170px]">
                Healthy cottage cheese recipes
                <Separator
                  orientation="vertical"
                  className="inline-block mx-2 h-[10px]"
                />
                
                <span>3 Hours ago</span>
              </div>
              <p className="text-sm w-full md:max-w-[220px] whitespace-normal text-black font-bold border-b border-transparent">
                The High-Protein Dip Formula That Will Help You Eat More Produce
              </p>
              <p className="text-xs text-gray-500">
                By Andrea Mathis, M.A., RDN, LD
              </p>
            </div>
          </div>
          <div className="max-lg:w-full flex items-start gap-2 border-b border-gray-200 pt-4 pb-4">
            <Image
              src="/assets/foods/sub2dishe.jpg"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <div className="whitespace-normal text-xs text-zinc-500 uppercase w-full md:max-w-[170px]">
                Healthy cottage cheese recipes
                <Separator
                  orientation="vertical"
                  className="inline-block mx-2 h-[10px]"
                />
                
                <span>3 Hours ago</span>
              </div>
              <p className="text-sm w-full md:max-w-[220px] whitespace-normal text-black font-bold border-b border-transparent">
                The High-Protein Dip Formula That Will Help You Eat More Produce
              </p>
              <p className="text-xs text-gray-500">
                By Andrea Mathis, M.A., RDN, LD
              </p>
            </div>
          </div>
          <div className="max-lg:w-full flex items-start gap-2 border-b border-gray-200 pt-4 pb-4">
            <Image
              src="/assets/foods/sub3dishe.jpg"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <div className="whitespace-normal text-xs text-zinc-500 uppercase w-full md:max-w-[170px]">
                Grocery & food news
                <Separator
                  orientation="vertical"
                  className="inline-block mx-2 h-[10px]"
                />
                <span>3 Hours ago</span>
              </div>
              <p className="text-sm w-full md:max-w-[220px] whitespace-normal text-black font-bold border-b border-transparent">
                DIY Salad Bars Are Taking Over the Internet—Here's How I've Been
                Doing It At Home for Years
              </p>
              <p className="text-xs text-gray-500">By Carolyn Malcoun</p>
            </div>
          </div>
          <div className="max-lg:w-full flex items-start gap-2 pt-4 pb-4">
            <Image
              src="/assets/foods/sub1dishe.jpg"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <div className="whitespace-normal text-xs text-zinc-500 uppercase w-full md:max-w-[170px]">
                Healthy cottage cheese recipes
                <Separator
                  orientation="vertical"
                  className="inline-block mx-2 h-[10px]"
                />
                <span>3 Hours ago</span>
              </div>
              <p className="text-sm w-full md:max-w-[220px] whitespace-normal text-black font-bold border-b border-transparent">
                The High-Protein Dip Formula That Will Help You Eat More Produce
              </p>
              <p className="text-xs text-gray-500">
                By Andrea Mathis, M.A., RDN, LD
              </p>
            </div>
          </div>
        </div>
        <button className="self-center border text-sm border-[#016646] py-2 px-4 text-center text-black font-semibold transition duration-200 ease-in-out hover:bg-[#016646] hover:text-white">
          See More News
        </button>
      </div>
    </div>
  );
};

export default MainPage;
