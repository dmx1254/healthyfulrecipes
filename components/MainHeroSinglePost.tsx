import { getOneRandomPost } from "@/lib/api/posts";
import { PostBlogResponse } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainHeroSinglePost = async () => {
  const post: PostBlogResponse[] = await getOneRandomPost();
  //   console.log(post);
  return (
    <Link
      href={`/${post[0]?.slug}-${post[0]?.postId}`}
      className="flex flex-col items-start gap-2 max-lg:self-center p-0 md:p-4"
    >
      <Image
        src={post[0]?.postImage}
        alt={post[0]?.title}
        width={700}
        height={700}
        className="w-screen h-[350] md:w-[700px] md:h-[500px] object-cover object-center"
        aria-label={post[0]?.title}
      />
      <div className="flex flex-col items-start gap-2 max-md:p-4">
        {/* <p className="text-xs text-zinc-500 uppercase -mb-1 whitespace-normal max-w-[700px]">
          Healthy butternut recipes
        </p> */}
        <p className="text-2xl font-bold whitespace-normal max-w-[700px]">
          {post[0]?.title}
        </p>
        <p className="text-sm max-w-[700px] line-clamp-3">{post[0].descriptions}</p>
      </div>
    </Link>
  );
};

export default MainHeroSinglePost;
