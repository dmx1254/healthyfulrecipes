import React from "react";
import { getFourRandomArticles } from "@/lib/api/posts";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { ArticleResponse } from "@/lib/type";
import Link from "next/link";
import clsx from "clsx";

const MainFourArticles = async () => {
  const articles: ArticleResponse[] = await getFourRandomArticles();
  //   console.log(articles);
  return (
    <div className="max-lg:w-full flex flex-col items-start gap-2">
      {articles?.map((article, index) => (
        <Link
          href={`/article/${article.slug}-${article.articleID}`}
          key={article?._id}
          className={clsx("max-lg:w-full flex items-start gap-2", {
            "border-b border-gray-200 pb-4": index <= 3,
            "pt-2": index > 0,
          })}
        >
          <Image
            src={article?.imageArt}
            alt={article?.title}
            width={140}
            height={140}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            aria-label={article?.title}
          />
          <div className="flex flex-col items-start gap-2">
            {/* <div className="whitespace-normal text-xs text-zinc-500 uppercase w-full md:max-w-[170px]">
              Healthy cottage cheese recipes
              <Separator
                orientation="vertical"
                className="inline-block mx-2 h-[10px]"
              />
              <span>3 Hours ago</span>
            </div> */}
            <p className="text-sm w-full md:max-w-[220px] whitespace-normal text-black font-bold border-b border-transparent">
              {article?.title}
            </p>
            <p className="text-xs text-gray-500">
              By Sophie Miller, M.A., RDN, LD
            </p>
          </div>
        </Link>
      ))}
      {/* <div className="max-lg:w-full flex items-start gap-2 pt-4 pb-4">
        <Image
          src="/assets/foods/sub1dishe.jpg"
          alt="The High-Protein Dip Formula That Will Help You Eat More Produce"
          width={140}
          height={140}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="flex flex-col items-start gap-2">
          <div className="whitespace-normal text-xs text-zinc-500 uppercase w-full md:max-w-[170px]">
            Healthy cottage cheese recipes
            <Separator
              orientation="vertical"
              className="inline-block mx-2 h-[10px]"
            />
            <span>3 Hours ago</span>
          </div>
          <p className="text-sm w-full md:max-w-[220px] whitespace-normal text-black font-bold border-b border-transparent">
            The High-Protein Dip Formula That Will Help You Eat More Produce
          </p>
          <p className="text-xs text-gray-500">
            By Andrea Mathis, M.A., RDN, LD
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default MainFourArticles;
