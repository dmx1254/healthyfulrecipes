import React from "react";
import { getMealsPlansAfterThree } from "@/lib/api/posts";
import Image from "next/image";
import { ArticleResponse, PostBlogResponse } from "@/lib/type";
import Link from "next/link";
// import { Separator } from "./ui/separator";
// import { TbClockHour3 } from "react-icons/tb";
// import { timeAgo } from "@/lib/utils";
// import { FaStar } from "react-icons/fa";

const BottomHealthyEatingPost = async ({ slug }: { slug: string }) => {
  const articles: ArticleResponse[] = await getMealsPlansAfterThree(slug);
  //   console.log(posts);
  return (
    <div className="w-full my-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {articles?.map((art) => (
      <Link
        href={`/healthy-eating/${art?.slug}-${art?.articleID}`}
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
          <p className="w-full max-lg:hidden text-xs text-zinc-500 truncate">{art?.desc}</p>
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

export default BottomHealthyEatingPost;
