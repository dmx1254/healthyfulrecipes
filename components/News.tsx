import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const News = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col gap-6 items-center p-4">
      <h2 className="flex items-center gap-1 text-3xl font-bold">
        News <ArrowRight className="text-green-700" size={26} />
      </h2>
      <div className="w-full flex items-center gap-8 justify-between">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/news/news1.webp"
            alt="news1"
            width={310}
            height={310}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Recalls
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[310px]">
              Over 30,000 Jars of Kimchi Recalled in 10 States Due to High
              Levels of Yeast
            </p>
            <p className="text-xs text-zinc-500 font-lora">
              By Danielle DeAngelis
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/news/news2.webp"
            alt="news1"
            width={310}
            height={310}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Studies & Experts
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[310px]">
              The Mediterranean Diet May Reduce Your Risk of COVID-19, According
              to New Study
            </p>
            <p className="text-xs text-zinc-500 font-lora">
              By Carrie Myers, M.S.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/news/news3.webp"
            alt="news1"
            width={310}
            height={310}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal">
              Recalls
            </p>
            <p className="text-lg font-bold whitespace-normal max-w-[310px]">
              Ashwagandha Supplements Are Being Recalled In Canada—Here's What
              to Know
            </p>
            <p className="text-xs text-zinc-500 font-lora">
              By Danielle DeAngelis
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default News;
