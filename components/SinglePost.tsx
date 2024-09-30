import { Separator } from "@/components/ui/separator";
import { Params, PostBlogResponse } from "@/lib/type";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaPinterestP, FaStar, FaRegStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdShareAlt } from "react-icons/io";
import { MdLocalPrintshop } from "react-icons/md";

import { BiSolidDish } from "react-icons/bi";
import { getSinglePost } from "@/lib/api/posts";
import NutriInfoAccordion from "./NutriInfoAccordion";
import clsx from "clsx";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import { choosedColor } from "@/lib/utils";
import NotFound from "@/app/not-found";

const SinglePost = async ({
  slug,
  slugId,
}: {
  slug: string;
  slugId: string;
}) => {
  const post: PostBlogResponse = await getSinglePost(slug, slugId);
  // console.log(post);

  if (!post) return <NotFound />;

  const totalStars = 5;
  const allStarsReviews = post?.reviews?.reduce(
    (acc, pst) => acc + pst.rating,
    0
  );

  const color = choosedColor;

  return (
    <div className="font-poppins w-full max-w-7xl flex flex-col items-center justify-center mx-auto p-4 my-6 sm:my-12">
      <div className="flex flex-col items-start max-w-3xl gap-4">
        <div className="w-full">
          <p className="text-4xl font-bold">{post.title}</p>
        </div>
        <div className="w-full inline-flex items-center gap-2">
          <div className="flex font-lora">
            <div className="inline-flex gap-0">
              {[...Array(totalStars)].map((_, index) =>
                index < Math.floor(allStarsReviews / post?.reviews.length) ? (
                  <FaStar key={index} className="text-green-900" size={20} />
                ) : (
                  <FaRegStar key={index} className="text-zinc-500" size={20} />
                )
              )}
            </div>
            <span className="text-sm mx-1">
              {`${Math.floor(allStarsReviews / post?.reviews.length) || 0}${
                Math.floor(allStarsReviews / post?.reviews.length) > 0
                  ? ".0"
                  : ""
              }`}
            </span>
            <span className="text-gray-500 text-sm">
              ({Math.floor(allStarsReviews / post?.reviews.length) || 0})
            </span>
          </div>
          <Separator orientation="vertical" className="h-[16px] w-[0.5px]" />
          <span className="text-sm uppercase font-semibold">
            {post?.reviews?.length} review{post?.reviews?.length > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          {post.descriptions.map((pt, index) => (
            <p key={index} className="w-full text-justify text-base/6">
              {pt}
            </p>
          ))}
        </div>
        <div className="text-xs inline-flex gap-1 items-center">
          By{" "}
          <span className="font-lora font-bold border-b border-black/90">
            Sophie Miller
          </span>{" "}
          <Separator
            orientation="vertical"
            className="h-[14px] w-[0.5px] bg-gray-200"
          />
          Published on September 1, 2024
        </div>
        <div className="flex items-center p-3 bg-[#E4F1EF]">
          <button className="inline-flex gap-1 uppercase font-[500]">
            Rate <Star size={18} className="text-green-900 mt-0.5" />
          </button>
          <Separator
            orientation="vertical"
            className="h-[16px] w-[0.5px] mx-2 bg-gray-400"
          />
          <button className="inline-flex gap-1 uppercase font-[500]">
            Print
            <MdLocalPrintshop size={18} className="text-green-900 mt-0.5" />
          </button>
          <Separator
            orientation="vertical"
            className="h-[16px] w-[0.5px] mx-2 bg-gray-400"
          />
          <button className="inline-flex gap-1 uppercase font-[500]">
            Share
            <IoMdShareAlt size={18} className="text-green-900 mt-0.5" />
          </button>
        </div>
        <div className="w-full max-w-[600px]  my-2">
          <Image
            src={post.postImage}
            alt={post.title}
            height={400}
            width={400}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="w-full h-auto"
            aria-label={post.title}
          />
        </div>
        <div className="w-full max-w-[600px] flex flex-col items-start p-4 bg-[#E4F1EF]">
          <div className="w-full flex items-center gap-4 pb-4 border-b border-gray-300">
            {post.activeInfos[0]?.prepTime && (
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold">Prep Time:</span>
                <span className="font-normal">
                  {post?.activeInfos[0]?.prepTime}
                </span>
              </div>
            )}
            {post?.activeInfos[0]?.yield && (
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold">Yield:</span>
                <span className="font-normal">
                  {post?.activeInfos[0]?.yield}
                </span>
              </div>
            )}
            {post?.activeInfos[0]?.activeTime && (
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold">Active Time:</span>
                <span className="font-normal">
                  {post?.activeInfos[0]?.activeTime}
                </span>
              </div>
            )}
            {post?.activeInfos[0]?.totalTime && (
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold">Total Time:</span>
                <span className="font-normal">
                  {post?.activeInfos[0]?.totalTime}
                </span>
              </div>
            )}

            {post?.activeInfos[0]?.servings && (
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold">Servings:</span>
                <span className="font-normal">
                  {post?.activeInfos[0]?.servings}
                </span>
              </div>
            )}
          </div>

          <div className="w-full max-w-[600px] flex flex-col gap-2 items-start pt-4">
            <span className="font-semibold">Nutrition Profile:</span>
            <div className="flex flex-wrap gap-4">
              {post?.nutritions.map((nutri, ind) => (
                <span key={ind} className="font-normal">
                  {nutri}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[600px] flex flex-col items-start gap-4 my-4">
          {post?.nutritionsImage &&
            post?.nutritionsImage.map((nutriImg, index) => (
              <Image
                key={index}
                src={nutriImg}
                alt={post.title}
                height={400}
                width={400}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="w-full h-auto"
                aria-label={post.title}
              />
            ))}
        </div>

        <div className="w-full max-w-[600px] flex flex-col items-start my-8">
          <h4 className="text-3xl lg:text-4xl font-bold mb-2">Ingredients</h4>
          {post?.ingredients.map((ingre) => (
            <p key={ingre._id} className="relative w-full text-base/6 mt-3">
              <span className="absolute h-1 w-1 rounded-full bg-green-700 top-[50%] translate-y-[-50%] left-[-1.5%]" />
              {`${ingre.qty} ${ingre.title}`}
            </p>
          ))}
        </div>
        <div className="w-full max-w-[600px] flex flex-col items-start gap-4">
          <h4 className="text-3xl lg:text-4xl font-bold mb-2">Directions</h4>

          {post?.steps.map((step) => (
            <div
              key={step._id}
              className="w-full max-w-[600px] flex flex-col items-start gap-2"
            >
              <h4 className="font-bold">{step.title}</h4>
              <p className="w-full text-justify">{step.descriptions}</p>
              {step.stepImage && (
                <Image
                  src={step.stepImage}
                  alt={step.title}
                  height={400}
                  width={400}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="w-full h-auto"
                  aria-label={step.title}
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-[600px] flex items-center gap-2 my-2">
          <h4 className="text-3xl lg:text-4xl font-bold ">Nutrition Facts</h4>{" "}
          <span className="text-sm">(per serving)</span>
        </div>
        <div
          className={clsx(
            "w-full max-w-[600px] flex flex-col items-start p-4",
            {
              "bg-transparent":
                post.nutritionInformations.reduce(
                  (acc, item) => acc + item.percent,
                  0
                ) >= 50,
              "bg-[#E4F1EF]":
                post.nutritionInformations.reduce(
                  (acc, item) => acc + item.percent,
                  0
                ) < 50,
            }
          )}
        >
          <div className="w-full max-w-[600px] flex items-center justify-between gap-2">
            {post?.nutritionFact &&
              post?.nutritionFact.map((nutriFact) => (
                <p
                  key={nutriFact._id}
                  className="w-full flex flex-col items-start my-6 text-base gap-2 font-normal"
                >
                  {/* {`${nutriFact.nutriFact}: ${nutriFact.amount}`} */}
                  {nutriFact.nutriFact}
                  <strong>{nutriFact.amount}</strong>
                </p>
              ))}
          </div>

          {/* <p className="my-6 text-base font-normal">
            Serving Size: ¼ cup dip & about ⅓ cup peppers
          </p> */}

          {post?.nutritionInformations.reduce(
            (acc, item) => acc + item.percent,
            0
          ) >= 50 ? (
            <div className="w-full">
              {post.nutritionInformations && (
                <NutriInfoAccordion
                  nutriFact={post.nutritionFact}
                  nutriInfo={post.nutritionInformations}
                  perServing={post.perServing}
                />
              )}
            </div>
          ) : (
            <div className="w-full max-w-[600px] flex flex-col items-start gap-2">
              {post.nutritionInformations.length > 0 && (
                <h3 className="text-xl font-semibold">Nutrition Information</h3>
              )}
              {post.nutritionInformations && (
                <div className="w-full flex flex-wrap gap-2 text-base font-normal">
                  {post?.nutritionInformations.map((nutiInfo) => (
                    <p key={nutiInfo._id} className="">
                      {nutiInfo.nutrition},&nbsp;
                      {nutiInfo.amount}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <ReviewForm postID={post._id} totalReviews={post?.reviews.length} />
        <div className="w-full flex flex-col items-start gap-4 my-8">
          {post?.reviews.map((review) => (
            <ReviewItem key={review._id} review={review} choosedColor={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
