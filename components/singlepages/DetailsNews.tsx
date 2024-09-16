import React from "react";

import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { getSingleNews } from "@/lib/api/posts";
import Image from "next/image";
import { ArticleResponse } from "@/lib/type";
import { convertDate, splitTextIntoParagraphs } from "@/lib/utils";

const DetailsNews = async ({
  slug,
  slugId,
}: {
  slug: string;
  slugId: string;
}) => {
  const article: ArticleResponse = await getSingleNews(slug, slugId);
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
        <span className="text-sm uppercase text-zinc-500">News</span>
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
          {article.articlePosts.map((art, index) => (
            <div
              key={art.articleTitle}
              className="flex flex-col items-start gap-4"
            >
              {art.articleImage && (
                <Image
                  src={art.articleImage}
                  alt={art.articleTitle}
                  width={100}
                  height={400}
                  className="w-full max-w-[600px] h-auto"
                  aria-label={art.articleTitle}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}
              {art.articleTitle && (
                <h3 className="w-full max-w-[600px] text-2xl font-bold my-4">
                  {`${index + 1}. ${art.articleTitle}`}
                  {/* {art.articleTitle} */}
                </h3>
              )}
              <div className="w-full max-w-[600px] flex flex-col items-start gap-3 -mt-3">
                {splitString(art.articleDesc).map(
                  (descArt: string, index: number) => (
                    <p
                      className="w-full max-w-[600px] text-justify"
                      key={index}
                    >
                      {descArt}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsNews;
