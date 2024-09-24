import React, { ChangeEvent, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";
import { signUpNewsLetter } from "@/lib/actions/posts";
import { toast } from "sonner";
import { NewsLetter } from "@/lib/type";

const NewsLetterDialog = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [plans, setPlans] = useState<string[]>([]);
  const [plansError, setPlansError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  //   console.log(user);

  const plansNutri = [
    "HealthyFulRecipes Nourish for Weight Loss",
    "HealthyFulRecipes Daily Recipe",
    "HealthyFulRecipes Daily Nosh",
    "HealthyFulRecipes ThePrep",
    "Plant Powered",
  ];

  const subscribeToNewsLetter = async () => {
    let data = {} as NewsLetter;
    if (isSignedIn) {
      data = {
        fullName: user.fullName || "",
        email: user.externalAccounts[0].emailAddress,
        plans: plans,
      };
    } else {
      data = {
        fullName: "",
        email: email,
        plans: plans,
      };
    }
    if (plans.length < 1) {
      setPlansError("Please select at least 1 from the list");
    } else {
      setPlansError("");
      setIsloading(true);
      try {
        const response = await signUpNewsLetter(data);
        setIsloading(false);
        if (response) {
          toast.success(
            "You did it! 🎉 Thank you for subscribing to HealthyFul Recipes. Get ready for mouth-watering recipes and health tips delivered straight to your inbox!",
            {
              style: {
                color: "#16a34a",
              },
            }
          );
        }
      } catch (error) {
        setIsloading(false);
        console.log(error);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        id="newsletter"
        className="border-[2px] py-3 px-12 rounded-none border-green-800 text-lg font-bold uppercase transition duration-200 ease-in-out hover:bg-green-800 hover:text-white"
      >
        NEWSLETTERS
      </DialogTrigger>
      <DialogContent
        className="font-poppins w-full max-w-[410px] flex flex-col items-center p-0 m-0 overflow-y-auto"
        isRounded={false}
        isShowIcon={false}
      >
        <div className="w-full flex items-center justify-between bg-green-800 m-0 p-3 select-none">
          <span className="text-lg font-lora text-white text flex items-center w-full justify-between">
            Newsletter SIGN UP
          </span>
          <button
            className="flex items-center justify-center outline-none text-white"
            onClick={handleCloseDialog}
          >
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 px-6 py-0">
          <Link href="/">
            <Image
              src="/healthyfulrecipes-logo.png"
              alt="healthyfulrecipes logo"
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-[115] h-[50px]"
            />
          </Link>
          <p className="text-base text-justify">
            Get healthy recipes, weight loss tips, health & wellness information
            delivered right to your inbox.
          </p>
          {!isSignedIn && (
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="email" className="font-bold">
                Email Adress
              </label>
              <input
                className="w-full p-3 outline-none border border-black/80"
                placeholder="yourname@example.com"
                type="text"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          )}
          <div className="w-full flex flex-col gap-5 items-start bg-[#e4f1ef] p-4 mt-4">
            <p className="text-2xl font-bold font-lora self-center">
              Newsletter Subscriptions
            </p>
            {plansNutri.map((option) => (
              <div key={option} className="flex items-start">
                <input
                  id={option}
                  type="checkbox"
                  value={plans}
                  checked={plans.includes(option)}
                  className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 accent-green-800 mt-1"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (!plans.includes(e.target.id)) {
                      setPlans((prevplan) => [...prevplan, e.target.id]);
                    } else {
                      setPlans((prevplan) =>
                        prevplan.filter((plan) => plan !== e.target.id)
                      );
                    }
                  }}
                />
                <label
                  htmlFor={option}
                  className="ml-3 inline-flex items-start text-base capitalize"
                >
                  {option}
                </label>
              </div>
            ))}
            <span className="text-sm inline-flex w-full text-red-600">
              {plansError}
            </span>
          </div>
          <button
            className="text-center outline-none bg-green-800 text-white w-full p-4 mt-8 transition duration-200 ease-in-out hover:bg-black/90 mb-6"
            onClick={subscribeToNewsLetter}
          >
            {isLoading ? "Is subscribing..." : "SIGN UP"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsLetterDialog;
