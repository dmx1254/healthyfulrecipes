import React from "react";

import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { getSingleHealthyEating } from "@/lib/api/posts";
import Image from "next/image";
import { ArticleResponse } from "@/lib/type";
import { convertDate, splitTextIntoParagraphs } from "@/lib/utils";

const DetailHealthyHeating = async ({
  slug,
  slugId,
}: {
  slug: string;
  slugId: string;
}) => {
  const article: ArticleResponse = await getSingleHealthyEating(slug, slugId);
//   console.log(slug);
//   console.log(article);
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
    <div className="flex flex-col items-start mb-6">
      <div className="w-full flex flex-col items-start gap-4">
        <span className="text-sm uppercase text-zinc-500">Healthy Eating</span>
        <div className="w-full flex flex-col items-start gap-4">
          <h3 className="text-2xl sm:text-4xl font-bold">{article.title}</h3>
          <p className="w-full max-w-[600px]">{article.desc}</p>
          <div className="w-full flex max-sm:flex-col items-start gap-4 sm:items-center justify-between">
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
            <div className="flex items-center justify-center gap-2">
              {" "}
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
                className="flex items-center justify-center p-2 rounded-full border border-zinc-500 text-red-600 hover:border-zinc-800"
              >
                <FaPinterestP size={18} />
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
      </div>
      <div className="w-full flex flex-col items-start gap-4 mt-6">
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
        {article.imageDesc && (
          <div className="flex flex-col items-center gap-4 w-full max-w-[600px]">
            {splitString(article.imageDesc).map((artDes, index) => (
              <p key={index} className="text-justify">
                {artDes}
              </p>
            ))}
          </div>
        )}

        <div className="w-full flex flex-col items-start max-w-[600px] -mt-2">
          {article?.articlePosts.map((article, index) => (
            <div
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
  );
};

export default DetailHealthyHeating;
