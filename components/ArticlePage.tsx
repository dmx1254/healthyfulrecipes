"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Separator } from "./ui/separator";
import { GoTriangleRight } from "react-icons/go";
import { dataArticleTest } from "@/lib/data";
import clsx from "clsx";
import { Position } from "@/lib/type";

const ArticlePage = () => {
  const articleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [item, setItem] = useState<string>(
    "How to Calculate Your Daily Calorie Goal"
  );
  const [itemTop, setItemTop] = useState<number>(0);
  const [posToTranslate, setPosToTranslate] = useState<number>(0);
  const [hgts, setHgts] = useState<number>(0);
  const [ArticleItem, setArticleItem] = useState<Position | null>(null);
  const [transalteVal, setTransalteVal] = useState<number>(150);
  //   console.log(hgts);
  //   console.log(item);

  //   const handleScroll = () => console.log("yes, scroll");

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const getPositionsEls = () => {
  //     articleRefs.current.map((el) => {
  //       // console.log(el);
  //       if (el) {
  //         const newPos = {
  //           title: el?.firstChild?.textContent,
  //           top: el?.getBoundingClientRect().top,
  //           bottom: el?.getBoundingClientRect().bottom,
  //           left: el?.getBoundingClientRect().left,
  //           right: el?.getBoundingClientRect().right,
  //         };

  //         // if (newPos.bottom <= window.innerHeight && newPos.top > 0) {
  //           setArticleItem(newPos);
  //         // }
  //       }
  //     });
  //   };

  //   getPositionsEls
  const handleScroll = () => {
    articleRefs.current.map((el) => {
      // console.log(el);
      if (el) {
        const newPos = {
          title: el?.firstChild?.textContent,
          top: el?.getBoundingClientRect().top,
          bottom: el?.getBoundingClientRect().bottom,
          left: el?.getBoundingClientRect().left,
          right: el?.getBoundingClientRect().right,
        };

        if (newPos.bottom <= window.innerHeight + 400 && newPos.top > 0) {
          setItem(newPos.title);
          setItemTop(newPos.top);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins w-full max-w-6xl flex flex-col items-start gap-4 my-4 lg:my-8">
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-4xl font-bold">
          What Does a 2,000-Calorie Diet Look Like?
        </p>
        <p className="text-basefont-normal">
          See what a day's worth of food looks like on a 2,000-calorie diet.
          Plus, get a sample meal plan with healthy ideas for breakfast, lunch,
          dinner and snacks.
        </p>
        <div className="w-full flex items-center justify-between gap-4">
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
          <div className="flex items-center justify-center my-4 gap-2">
            {" "}
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

      <div className="w-full flex items-start gap-8">
        <div className="sticky top-36 flex flex-col items-start p-4 w-full max-w-[250px] bg-[#F2f2f2]">
          <h3 className="text-xl font-bold my-2">In this Article</h3>
          <div className="flex flex-col items-start gap-4 pl-4 border-l border-zinc-500">
            {dataArticleTest.map(({ id, title }) => (
              <div
                key={id}
                className={clsx(
                  "relative w-full inline-flex text-sm capitalize",
                  {
                    "font-semibold": title === item,
                    "text-zinc-400": title !== item,
                  }
                )}
              >
                {title === item && (
                  <span className="absolute flex items-center justify-center p-1 bg-[#F2F2F2] text-green-900 rounded-full left-[-14%] translate-y-[-10%]">
                    <GoTriangleRight />
                  </span>
                )}

                {title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-8 max-w-2xl">
          {dataArticleTest.map(({ id, title, desc }, index) => (
            <div
              ref={(el) => (articleRefs.current[index] = el)}
              key={id}
              className="flex flex-col items-start gap-4"
            >
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-justify text-base/8">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ArticlePage;
