import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HealthyLifestyle = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-6 items-center p-4">
      <h2 className="flex items-center gap-1 text-3xl font-bold">
        Healthy Lifestyle <ArrowRight className="text-green-700" size={26} />
      </h2>
      <div className="w-full flex items-center gap-8 justify-between">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/healthy/healthy1.webp"
            alt="news1"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Weight Loss
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[300px]">
              5 Health Markers That Are More Important Than Your Weight,
              According to Experts
            </p>
            <p className="text-xs text-zinc-500 font-lora">
              By Caroline Thomason, RD, CDCES
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/healthy/healthy2.webp"
            alt="news1"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Best Healthy Foods
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[300px]">
              These 7 Best Foods for Managing Migraines, According to Dietitians
            </p>
            <p className="text-xs text-zinc-500 font-lora">By Adam Meyer</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/healthy/healthy3.webp"
            alt="news1"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Kitchen Essentials
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[300px]">
              The Best Ceramic Cookware Sets, According to Our Tests
            </p>
            <p className="text-xs text-zinc-500 font-lora">By Marisa Olsen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyLifestyle;
