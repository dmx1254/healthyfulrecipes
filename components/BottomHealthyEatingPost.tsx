import React from "react";
import { getMealsPlansAfterThree } from "@/lib/api/posts";
import Image from "next/image";
import { PostBlogResponse } from "@/lib/type";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { TbClockHour3 } from "react-icons/tb";
import { timeAgo } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

const BottomHealthyEatingPost = async ({ slug }: { slug: string }) => {
  const posts: PostBlogResponse[] = await getMealsPlansAfterThree(slug);
  //   console.log(posts);
  return (
    <div className="w-full my-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts?.map((post) => (
        <Link
          href={`/${post?.slug}-${post?.postId}`}
          key={post?._id}
          className="max-lg:w-full flex lg:flex-col items-start gap-4 border-b max-sm:pb-6 max-sm:border-gray-300 sm:border-transparent md:border-transparent lg:border lg:border-zinc-500"
        >
          <Image
            src={post?.postImage}
            alt={post?.title}
            width={300}
            height={300}
            className="max-sm:max-w-[150px] max-sm:h-auto max-lg:max-w-[120] max-lg:h-[120px]"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="w-full flex flex-col items-start gap-2 lg:p-2">
            <p className="max-lg:hidden w-full text-xs text-zinc-500 truncate">
              {post?.descriptions}
            </p>
            <p className="w-full text-lg sm:text-xl font-bold lg:max-w-[300px] line-clamp-2">
              {post?.title}
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
                <TbClockHour3 className="text-green-700" />
                {timeAgo(post?.createdAt)}
              </span>
            </div>

            <p className="font-lora text-xs text-zinc-500">By Sophie Miller</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomHealthyEatingPost;
