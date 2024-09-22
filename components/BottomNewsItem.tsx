import React from "react";
import { getNewsAfterThree } from "@/lib/api/posts";
import Image from "next/image";
import { ArticleResponse } from "@/lib/type";
import Link from "next/link";

const BottomNewsItem = async () => {
  const news: ArticleResponse[] = await getNewsAfterThree();
//   console.log(news);
  return (
    <div className="w-full my-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {news?.map((art) => (
        <Link
          href={`/news/${art?.slug}-${art?.articleID}`}
          key={art?._id}
          className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500"
        >
          <Image
            src={art?.imageArt}
            alt={art?.title}
            width={300}
            height={300}
            className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="w-full flex flex-col items-start gap-2 lg:p-2">
            <p className="w-full text-xs text-zinc-500 truncate">{art?.desc}</p>
            <p className="w-full text-lg sm:text-xl font-bold lg:max-w-[300px] line-clamp-2">
              {art?.title}
            </p>

            <p className="font-lora text-xs text-zinc-500">By Sophie Miller</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNewsItem;
