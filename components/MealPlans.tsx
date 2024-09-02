import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const MealPlans = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col gap-6 items-center mt-2 p-4">
      <h2 className="flex items-center gap-1 text-3xl font-bold">
        Meal Plans <ArrowRight className="text-green-700" size={26} />
      </h2>
      <div className="w-full flex items-center gap-8 justify-between">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/mealplans/meal1.webp"
            alt="news1"
            width={340}
            height={340}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              High-Protein Meal Plans
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[340px]">
              7-Day High-Protein Mediterranean Diet Meal Plan for Fall, Created
              by a Dietitian
            </p>
            <p className="text-xs text-zinc-500 font-lora">
              By Annie Nguyen, M.A., RD
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 -mt-14">
          {/* <Image
            src="/assets/news/news2.webp"
            alt="news1"
            width={310}
            height={310}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          /> */}
          <video src="https://www.eatingwell.com/thmb/Nfl-1MUZuH6OqTjC-xmH9CqQmPY=/364x242/filters:gifv(webm)/Prep-square-082424-c69fea77b066408cb616aad44ff4ba69.gif" className="w-[340px] h-[340px]" autoPlay loop></video>
          <div className="flex flex-col items-start gap-2 -mt-12">
            <p className="text-xs text-zinc-500 uppercase -mb-1 -mt-2 whitespace-normal">
              ThePrep
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[310px]">
              Fast and Easy Dinners with No Added Sugars (Weekly Plan & Shopping
              List!)
            </p>
            <p className="text-xs text-zinc-500 font-lora">By Megan Ginsberg</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 -mt-8">
          <Image
            src="/assets/mealplans/meal3.webp"
            alt="news1"
            width={340}
            height={340}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Low Sodium Meal Plans
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[340px]">
              7-Day Low-Sodium Diet Meal Plan, Created by a Dietitian
            </p>
            <p className="text-xs text-zinc-500 font-lora">
              By Victoria Seaver, M.S., RD
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default MealPlans;
