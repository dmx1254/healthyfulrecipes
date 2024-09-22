import Image from "next/image";
import React from "react";

import { getLastThreePostByUsingCat } from "@/lib/api/posts";
import { PostBlogResponse } from "@/lib/type";
import Link from "next/link";

const HealthyLifeStyleItem = async ({
  slug,
  lim,
}: {
  slug: string;
  lim: number;
}) => {
  const posts: PostBlogResponse[] = await getLastThreePostByUsingCat(slug, lim);
  //   console.log(posts);
  return (
    <div className="flex max-sm:flex-col items-start gap-6">
      {posts?.map((post) => (
        <Link
          key={post._id}
          href={`/${post.slug}-${post.postId}`}
          className="max-sm:w-full flex flex-col items-start gap-4 pt-4"
        >
          <Image
            src={post.postImage}
            alt={post.title}
            width={400}
            height={400}
            className="max-sm:w-full max-sm:h-auto"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            aria-label={post.title}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-zinc-500 max-w-[300px] truncate">
              {post.descriptions}
            </p>
            <p className="text-lg sm:text-xl font-bold w-full sm:max-w-[400px]">
              {post.title}
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

export default HealthyLifeStyleItem;
