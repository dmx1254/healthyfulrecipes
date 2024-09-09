import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const localization = {
  signUp: {
    start: {
      subtitle:
        "Sign up to rate and review your favorite HealthyFulRecipes recipes.",
    },
  },

  signIn: {
    start: {
      subtitle:
        "Welcome back! Please sign in to rate and review your favorite HealthyFulRecipes recipes.",
    },
  },
};

// socialButtonsBlockButtonManyInView
