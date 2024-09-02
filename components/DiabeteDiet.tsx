import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { FaStar } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";

const DiabeteDiet = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center bg-[#E4F1EF] p-4">
      <h2 className="flex items-center gap-1 text-3xl font-bold -ml-36">
        Diabets Diet Center <ArrowRight className="text-green-700" size={26} />
      </h2>

      <div className="w-full max-w-7xl flex items-start gap-20">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-start gap-2">
            <Image
              src="/assets/foods/dishe4.webp"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm max-w-[180px] whitespace-normal text-black font-bold border-b border-transparent">
                The 7 Best Antioxidant-Rich Veggies for Diabetes, According to
                Dietitians
              </p>
              <p className="text-xs text-gray-500 max-w-[180px]">
                By Deborah Murphy, M.S., RDN
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src="/assets/foods/dishe5.webp"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm max-w-[180px] whitespace-normal text-black font-bold border-b border-transparent">
                7-Day Mediterranean Diet Meal Plan for Better Blood Sugar,
                Created by a Dietitian
              </p>
              <p className="text-xs text-gray-500 max-w-[180px]">
                By Emily Lachtrupp, M.S., RD
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src="/assets/foods/dishe6.webp"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm max-w-[180px] whitespace-normal text-black font-bold border-b border-transparent">
                The 5 Carbs You Should Be Eating for Insulin Resistance,
                According to Dietitians
              </p>
              <p className="text-xs text-gray-500 max-w-[180px]">
                By Lauren Manaker M.S., RDN, LD, CLEC
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src="/assets/foods/dishe7.webp"
              alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm max-w-[180px] whitespace-normal text-black font-bold border-b border-transparent">
                7 Best No-Added-Sugar Drinks to Keep You Healthy & Hydrated,
                According to Dietitians
              </p>
              <p className="text-xs text-gray-500 max-w-[180px]">
                By Roxana Ehsani, M.S., RD, CSSD, LDN
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/foods/dishmain.webp"
            alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
            width={750}
            height={700}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2 max-w-[750px]">
            <p className="text-xs text-zinc-500">Healthy Salad Recipes</p>
            <p className="text-xl font-bold">
              The Only High-Protein Mason Jar Salad Formula You Need
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
                <TbClockHour3 className="text-green-700" /> 10 mins
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">
              By Isabel Vasquez, RD, LDN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabeteDiet;
