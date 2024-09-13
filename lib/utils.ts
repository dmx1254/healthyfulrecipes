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

export function generateCode(): string {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    code += digits[randomIndex];
  }

  return code;
}
