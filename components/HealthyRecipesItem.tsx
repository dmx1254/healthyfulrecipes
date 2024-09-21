import React from "react";
import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { Separator } from "./ui/separator";
// import { TbClockHour3 } from "react-icons/tb";
import {
  getLastSixRecipesPost,
  getLastThreePostByUsingCat,
} from "@/lib/api/posts";
import { PostBlogResponse } from "@/lib/type";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { TbClockHour3 } from "react-icons/tb";
import { timeAgo } from "@/lib/utils";
import clsx from "clsx";
// import { timeAgo } from "@/lib/utils";

const HealthyRecipesItem = async ({
  slug,
  lim,
}: {
  slug: string;
  lim: number;
}) => {
  const posts: PostBlogResponse[] = await getLastSixRecipesPost(slug, lim);
  //   console.log(posts);
  const postLength = posts?.length - 1;
  return (
    <div className="flex flex-col items-start gap-4">
      {posts?.map((post, index) => (
        <Link
          href={`${post.slug}-${post.postId}`}
          key={post._id}
          className={clsx("w-full flex items-start gap-4", {
            "border-b pb-8 border-gray-300": index < postLength,
          })}
        >
          <Image
            src={post.postImage}
            alt={post.title}
            width={230}
            height={230}
            className="max-sm:max-w-[150px] max-sm:h-auto"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            aria-label={post.title}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 truncate max-w-[200px]">
              {post.descriptions}
            </p>
            <p className="text-lg sm:text-3xl font-bold w-full sm:max-w-[500px]">
              {post.title}
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
                {timeAgo(post.createdAt)}
              </span>
            </div>
            <p className="font-lora text-xs text-zinc-500">By Sophie miller</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HealthyRecipesItem;
