import React from "react";
import Image from "next/image";

const TopStoriesPage = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col items-start gap-4 p-4">
      <h2 className="w-full relative font-bold text-3xl top-stories">
        Top Stories
      </h2>
      <div className="w-full grid grid-cols-2 gap-8 mt-4">
        <div className="flex items-start gap-2">
          <Image
            src="/assets/stories/storie1.webp"
            alt="Storie"
            width={200}
            height={200}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs uppercase text-zinc-500">News</p>
            <p className="text-lg font-semibold max-w-[270px]">
              Skechers, Reebok, Crocs, and More Comfy Shoe Brands Are Up to 50%
              Off at Walmart
            </p>
            <p className="text-xs text-gray-400 font-lora">
              By Rachel Trujillo
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/assets/stories/storie2.webp"
            alt="Storie"
            width={200}
            height={200}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs uppercase text-zinc-500">News</p>
            <p className="text-lg font-semibold max-w-[270px]">
              Amazon’s Labor Day Deals Include Price Cuts on Le Creuset, Lodge,
              Adidas and More Up to 62% Off
            </p>
            <p className="text-xs text-gray-400 font-lora">
              By Kristin Montemarano
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/assets/stories/storie3.webp"
            alt="Storie"
            width={200}
            height={200}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs uppercase text-zinc-500">
              Celebrity & Entertainment
            </p>
            <p className="text-lg font-semibold max-w-[270px]">
              Jenna Ortega Just Shared Her Favorite Way to Decompress After a
              Long Day.
            </p>
            <p className="text-xs text-gray-400 font-lora">
              By Danielle DeAngelis
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/assets/stories/storie4.webp"
            alt="Storie"
            width={200}
            height={200}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs uppercase text-zinc-500">Recalls</p>
            <p className="text-lg font-semibold max-w-[270px]">
              Brazil Nuts Recalled Nationwide Due to High Levels of Mold and
              Yeast
            </p>
            <p className="text-xs text-gray-400 font-lora">
              By Camryn Alexa Wimberly
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default TopStoriesPage;
