"use client";
import React, { useState } from "react";

import { ReviewResponse } from "@/lib/type";
import { numDateConverted } from "@/lib/utils";
import { BiSolidDish } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import clsx from "clsx";

const ReviewItem = ({ review }: { review: ReviewResponse }) => {
  const [helpNum, setHelpNum] = useState<number>(0);
  //   console.log(review);
  const totalStars = 5;

  const handleItem = () => {
    setHelpNum((prevHelpNum) => (prevHelpNum > 0 ? 0 : 1));
  };

  const colors = ["#0284c7", "#2563eb", "#0891b2", "#d97706", "#ea580c"];
  const color = Math.floor(Math.random() * colors.length);
  const choosedColor = colors[color];

  return (
    <div className="w-full max-w-[600px] font-poppins flex flex-col items-start gap-3 pb-4 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <span
          style={{
            backgroundColor: choosedColor,
          }}
          className={clsx(
            "flex items-center justify-center text-white rounded-full p-2"
          )}
        >
          <BiSolidDish size={24} />
        </span>
        <span className="text-base/7 font-bold">HealthyFulRecipes Member</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          {[...Array(totalStars)].map((_, index) =>
            index < review.rating ? (
              <FaStar key={index} className="text-green-900" size={20} />
            ) : (
              <FaRegStar key={index} className="text-zinc-500" size={20} />
            )
          )}
        </div>
        <span className="text-sm text-zinc-600">
          {numDateConverted(review?.createdAt)}
        </span>
      </div>
      {review.message && <p className="w-full text-sm/7">{review.message}</p>}
      <button className="flex items-center gap-1" onClick={handleItem}>
        <AiFillLike
          className={clsx({
            "text-green-900": helpNum === 0,
            "text-zinc-600": helpNum === 1,
          })}
        />
        <span
          className={clsx("text-xs font-lora border-b border-zinc-500", {
            "text-zinc-600": helpNum === 1,
          })}
        >
          Helpful({helpNum})
        </span>
      </button>
    </div>
  );
};

export default ReviewItem;
