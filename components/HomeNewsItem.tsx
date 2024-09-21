import Image from "next/image";
import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Separator } from "./ui/separator";
// import { TbClockHour3 } from "react-icons/tb";
import { getThreeLatestNews } from "@/lib/api/posts";
import { ArticleResponse } from "@/lib/type";
import Link from "next/link";
// import { timeAgo } from "@/lib/utils";

const HomeNewsItem = async () => {
  const articles: ArticleResponse[] = await getThreeLatestNews();
  //   console.log(articles);
  return (
    <div className="flex max-sm:flex-col items-start gap-6">
      {articles?.map((article) => (
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
                <TbClockHour3 className="text-green-700" />{" "}
                {timeAgo(article.createdAt)}
              </span>
            </div> */}
            <p className="font-lora text-xs text-zinc-500">By Sophie Miller</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeNewsItem;
