"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { BiSolidDish } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Separator } from "./ui/separator";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { reviewsComments } from "@/lib/utils";
import clsx from "clsx";
import { useUser } from "@clerk/nextjs";
import { addPostReview } from "@/lib/actions/posts";
import { toast } from "sonner";

const formSchema = z.object({
  message: z.string().optional(),
});

const ReviewForm = ({
  postID,
  totalReviews,
}: {
  postID: string;
  totalReviews: number;
}) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [tabIndex, setTabIndex] = useState<string[]>([]);
  const [numReview, setNumReview] = useState<number>(0);
  const [isReviewing, setIsReviewing] = useState<boolean>(false);
  //   console.log(reviewsComments);
  //   console.log(user);

  const handleItem = (item: string) => {
    if (tabIndex.includes(item)) {
      //   setTabIndex(tabIndex.filter((title) => title !== item));
      let indexToSli: number = tabIndex.indexOf(item);
      let newTabIndex = tabIndex.slice(0, indexToSli);
      setTabIndex(newTabIndex);
      setNumReview(indexToSli);
      //   setNumReview((prevNumReview) =>
      //     prevNumReview > 0 ? prevNumReview - 1 : prevNumReview
      //   );
    } else {
      //   setTabIndex((prevTabIndex) => [...prevTabIndex, item]);
      //   setNumReview((prevNumReview) => prevNumReview + 1);
      if (item === "rate1") {
        setTabIndex(["rate1"]);
        setNumReview(1);
      }
      if (item === "rate2") {
        setTabIndex(["rate1", "rate2"]);
        setNumReview(2);
      }
      if (item === "rate3") {
        setTabIndex(["rate1", "rate2", "rate3"]);
        setNumReview(3);
      }
      if (item === "rate4") {
        setTabIndex(["rate1", "rate2", "rate3", "rate4"]);
        setNumReview(4);
      }
      if (item === "rate5") {
        setTabIndex(["rate1", "rate2", "rate3", "rate4", "rate5"]);
        setNumReview(5);
      }
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    if (isSignedIn) {
      const data = {
        ...values,
        postID,
        fullName: user.fullName!,
        rating: numReview,
      };

      try {
        setIsReviewing(true);
        const response = await addPostReview(data);
        setIsReviewing(false);
        toast.success(response?.message, {
          style: {
            color: "#16a34a",
          },
        });
        form.reset();
        setNumReview(0);
        setTabIndex([]);
      } catch (error) {
        console.log(error);
        setIsReviewing(false);
      }
    } else {
      toast.error("Oops! It looks like you're not logged in.", {
        style: {
          color: "#dc2626",
        },
      });
    }
  }

  return (
    <div className="w-full max-w-[600px]  flex flex-col items-start gap-2 mt-12">
      <p className="text-3xl font-bold mb-2">
        Reviews ({totalReviews > 0 ? totalReviews : 0})
      </p>
      <div className="w-full bg-[#E4F1EF]">
        <div className="flex flex-col items-start bg-white rounded p-4 gap-4 m-4">
          <div className="w-full flex items-center gap-2">
            <span className="flex items-center justify-center bg-[#D68133] text-white rounded-full p-3">
              <BiSolidDish size={24} />
            </span>
            <p className="flex-1 font-semibold">
              The High-Protein Dip Formula That Will Help You Eat More Produce
            </p>
          </div>
          <div className="flex-flex-col items-start gap-2">
            <div>
              <span className="text-sm font-semibold">My rating</span>
              <span className="text-xs text-zinc-600 ml-2">(required)</span>
            </div>
            <div className="inline-flex items-center gap-0 mt-2">
              {reviewsComments.map(({ indice, title }) => (
                <button
                  key={indice}
                  className="outline-none transition duration-200 ease-in-out"
                  onClick={() => handleItem(title)}
                >
                  {tabIndex.includes(title) ? (
                    <FaStar size={30} color="#14532d" />
                  ) : (
                    <FaRegStar size={30} color="#52525b" />
                  )}
                </button>
              ))}

              <Separator
                orientation="vertical"
                className="h-[34px] w-[0.5px] bg-gray-300 mx-3"
              />
              <span className="text-sm">
                {numReview === 1 && "Couldn't eat it"}
                {numReview === 2 && "Didn't like it"}
                {numReview === 3 && "It was ok"}
                {numReview === 4 && "Liked it"}
                {numReview === 5 && "Loved it"}
              </span>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <div>
                      <span className="text-sm font-semibold">My Review</span>
                      <span className="text-xs text-zinc-600 ml-2">
                        (optional)
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="What did you think about this recipe? Did you make any changes or notes?"
                        {...field}
                        aria-label="review message"
                        className="min-h-28"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                aria-label="Review submit button"
                disabled={numReview < 1}
                className={clsx(
                  "max-sm:w-full select-none text-center text-sm px-4 py-2 text-white uppercase self-end font-semibold transition duration-200 ease-in-out hover:bg-black/90",
                  {
                    "bg-gray-400": numReview < 1,
                    "bg-green-800": numReview > 0,
                  }
                )}
              >
                {isReviewing ? "Is submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
