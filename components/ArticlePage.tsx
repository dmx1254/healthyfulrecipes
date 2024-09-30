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
import { ArticleResponse, Position } from "@/lib/type";
import Image from "next/image";
import { convertDate, splitTextIntoParagraphs } from "@/lib/utils";

const ArticlePage = ({ article }: { article: ArticleResponse }) => {
  const articleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [item, setItem] = useState<string>("");

  const [itemTop, setItemTop] = useState<number>(0);
  const [posToTranslate, setPosToTranslate] = useState<number>(0);
  const [hgts, setHgts] = useState<number>(0);
  const [ArticleItem, setArticleItem] = useState<Position | null>(null);
  const [transalteVal, setTransalteVal] = useState<number>(150);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    articleRefs.current.map((el) => {
      if (el) {
        const newPos = {
          title: el?.querySelector("h2")?.textContent,
          top: el?.getBoundingClientRect().top,
          bottom: el?.getBoundingClientRect().bottom,
          left: el?.getBoundingClientRect().left,
          right: el?.getBoundingClientRect().right,
        };
        // console.log("newPos", newPos.title);

        if (newPos.top + 200 <= window.innerHeight && newPos.bottom > 0) {
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

  const splitString = (chaine: string): string[] => {
    if (chaine && typeof chaine === "string") {
      if (chaine.includes("  ")) {
        return chaine.split("  ");
      } else {
        if (chaine.length > 800) {
          return splitTextIntoParagraphs(chaine);
        } else {
          return chaine.split("  ");
        }
      }
    } else {
      return [""];
    }
  };

  return (
    <div className="font-lora antialiased w-full min-h-screen max-w-2xl lg:max-w-6xl flex flex-col items-center justify-center mx-auto gap-2 my-4 lg:my-8">
      <div className="flex flex-col items-start mx-auto">
        <div className="w-full flex flex-col items-start gap-4">
          <p className="w-full max-w-[800px] text-2xl sm:text-3xl md:text-4xl font-bold">{article.title}</p>
          <p className="w-full max-w-[600px] font-normal text-justify">{article.desc}</p>
          <div className="w-full max-w-[600px] flex flex-col items-start gap-2">
            {article.imageArt && (
              <Image
                src={article.imageArt}
                alt={article.title}
                width={100}
                height={400}
                className="w-full max-w-[600px] h-auto"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                aria-label={article.title}
              />
            )}

            {article.imageDesc && (
              <div className="flex flex-col items-center gap-4 w-full lg:max-w-[600px]">
                {splitString(article.imageDesc).map((artDes, index) => (
                  <p key={index} className="w-full text-justify ">
                    {artDes}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="w-full flex max-lg:flex-col items-start lg:items-center justify-between gap-2 max-lg:mb-3">
            <div className="text-xs inline-flex gap-1 items-center">
              By{" "}
              <span className="font-lora font-bold border-b border-black/90">
                Sophie Miller
              </span>{" "}
              <Separator
                orientation="vertical"
                className="h-[14px] w-[0.5px] bg-gray-200"
              />
              Published on {convertDate(article.createdAt)}
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

        <div className="w-full flex max-lg:flex-col items-center lg:items-start gap-8 -mt-2">
          <div className="lg:sticky lg:top-36 flex flex-col items-start p-4 w-full lg:max-w-[250px] bg-[#F2f2f2] mt-6">
            <h3 className="text-xl font-bold my-2">In this Article</h3>
            <div className="flex flex-col items-start gap-4 pl-4 lg:border-l border-zinc-500">
              {article?.articlePosts.map((article) => (
                <div
                  key={article._id}
                  className={clsx("relative w-full inline-flex capitalize max-lg:max-w-[300px]", {
                    "font-semibold": article?.articleTitle === item,
                    "text-zinc-400": article?.articleTitle !== item,
                  })}
                >
                  {article?.articleTitle === item && (
                    <span className="max-lg:hidden absolute flex items-center justify-center p-1 bg-[#F2F2F2] text-green-900 rounded-full left-[-14%] translate-y-[-10%]">
                      <GoTriangleRight />
                    </span>
                  )}

                  {article?.articleTitle}
                </div>
              ))}
            </div>
          </div>
          <div className="max-lg:w-full flex-1 flex flex-col items-start gap-8 max-w-2xl">
            {article?.articlePosts.map((article, index) => (
              <div
                ref={(el) => (articleRefs.current[index] = el)}
                key={article._id}
                className="flex flex-col items-start gap-4"
              >
                <div className="w-full max-w-[600px] flex flex-col items-start gap-2">
                  {article.articleImage && (
                    <Image
                      src={article.articleImage}
                      alt={article.articleTitle}
                      width={100}
                      height={400}
                      className="w-full max-w-[600px] h-auto"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      aria-label={article.articleTitle}
                    />
                  )}
                </div>
                <h2 className="text-3xl font-bold sub-art-title">
                  {article?.articleTitle}
                </h2>
                {article.articleDesc && (
                  <div className="flex flex-col items-center gap-4 w-full max-w-[600px]">
                    {splitString(article.articleDesc).map((artDes, index) => (
                      <p key={index} className="w-full text-justify">
                        {artDes}
                      </p>
                    ))}
                  </div>
                )}
                <div className="w-full flex flex-col items-start">
                  {article.articleSubTitle &&
                    article.articleSubTitle.map((subArt, ind) => (
                      <div
                        className="relative w-full max-w-[600px] flex flex-col items-start gap-4 ml-0 sm:ml-4"
                        key={subArt._id}
                      >
                        {subArt.title && (
                          <h4 className="text-xl font-bold mt-3 -mb-1.5">
                            {/* {index === 0 && `${ind + 1}. `} */}
                            {`${ind + 1}. `}
                            {subArt.title}
                          </h4>
                        )}

                        {subArt.description && (
                          <div className="relative w-full text-justify ml-0 sm:ml-4">
                            {subArt.description}
                            {/* {index === 0 && (
                              <span className="max-lg:hidden absolute h-[5px] w-[5px] rounded-full bg-green-500 top-[4%] left-[-1.5%]" />
                            )} */}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
