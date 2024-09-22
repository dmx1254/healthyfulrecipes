import Image from "next/image";
import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Separator } from "./ui/separator";
// import { TbClockHour3 } from "react-icons/tb";
import { getFiveLatestDiabetes } from "@/lib/api/posts";
import { ArticleResponse } from "@/lib/type";
import Link from "next/link";
// import { timeAgo } from "@/lib/utils";

const HomeDietDiabetesItem = async () => {
  const articles: ArticleResponse[] = await getFiveLatestDiabetes();
  // console.log(articles.length);
  const art = articles[0];
  return (
    <div className="w-full max-w-6xl max-lg:flex-col-reverse flex items-start gap-10 lg:gap-20">
      <div className="max-lg:w-full max-lg:max-w-[750px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-lg:self-center">
        {articles?.slice(1, 5).map((art) => (
          <Link
            href={`/diabetes-diet-center/${art.slug}-${art.articleID}`}
            key={art?._id}
            className="flex items-start gap-2"
          >
            <Image
              src={art?.imageArt}
              alt={art?.title}
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              aria-label={art?.title}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm w-full md:max-w-[180px] whitespace-normal text-black font-bold border-b border-transparent">
                {art?.title}
              </p>
              <p className="font-lora text-xs text-gray-500 w-full md:max-w-[180px]">
                {/* By Deborah Murphy, M.S., RDN */}
                Sophie Miller
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href={`/diabetes-diet-center/${art?.slug}-${art?.articleID}`}
        className="flex flex-col items-start gap-2 max-lg:self-center"
      >
        <Image
          src={art?.imageArt}
          alt={art?.title}
          width={750}
          height={700}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="flex flex-col items-start gap-2 max-w-[750px]">
          <p className="text-xs text-zinc-500">Healthy Salad Recipes</p>
          <p className="text-xl font-bold w-full">{art?.title}</p>
          {/* <div className="flex gap-2 items-center">
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
            </div> */}
          <p className="font-lora text-xs text-zinc-500">
            By Isabel Vasquez, RD, LDN
          </p>
        </div>
      </Link>

      {/* {articles.map((article) => (
        <Link
          key={article._id}
          href={`/news/${article.slug}-${article.articleID}`}
          className="max-sm:w-full flex flex-col items-start gap-4 pt-4"
        >
          <Image
            src={article.imageArt}
            alt={article.title}
            width={400}
            height={400}
            className="max-sm:w-full max-sm:h-auto"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            aria-label={article.title}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 max-w-[150px] truncate">
              {article.title}
            </p>
            <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[400px]">
              {article.title}
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
                <TbClockHour3 className="text-green-700" />{" "}
                {timeAgo(article.createdAt)}
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">By Sophie Miller</p>
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default HomeDietDiabetesItem;
