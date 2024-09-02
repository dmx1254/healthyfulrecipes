import Image from "next/image";
import React from "react";

const HeroBottom = () => {
  return (
    <div className="relative flex items-center justify-center w-full mx-0">
      <Image
        src="/assets/hero/herob.webp"
        alt="Melting Cherry Tomato & Mozzarella Pasta in a bowl up-close overhead"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="absolute w-full max-w-[370px] z-10 flex flex-col items-start gap-2 p-5 bg-white top-[25%] left-[10%]">
        <p className="text-xs uppercase text-zinc-500">
          High-Protein Dinner Recipes
        </p>
        <p className="text-3xl font-bold">
          20 High-Protein, Vegetarian Dinners in 3 Steps or Less
        </p>
        <p className="text-xs/5">
          These 3-step dinner recipes, like tomato pasta or pesto gnocchi, have
          at least 15 grams of protein per serving for a nourishing vegetarian
          dish.
        </p>
        <p className="text-xs font-lora text-zinc-500">
          By Camryn Alexa Wimberly
        </p>
      </div>
    </div>
  );
};

export default HeroBottom;
