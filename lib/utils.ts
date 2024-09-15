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

export const convertDate = (date: Date): string => {
  const dateConvert = new Date(date).toLocaleDateString("en-Us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return dateConvert;
};


export function timeAgo(dateString: Date): string {
  const now = new Date();
  const pastDate = new Date(dateString);

  const diffInMs = now.getTime() - pastDate.getTime();
  const diffInMins = Math.floor(diffInMs / 1000 / 60);

  if (diffInMins < 60) {
    return `${diffInMins} mins`;
  }

  const diffInHours = Math.floor(diffInMins / 60);
  const remainingMins = diffInMins % 60;

  if (diffInHours < 24) {
    return remainingMins > 0
      ? `${diffInHours} hr${diffInHours > 1 ? "s" : ""} ${remainingMins} mins`
      : `${diffInHours} hr${diffInHours > 1 ? "s" : ""}`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
}


export function splitTextIntoParagraphs(text: string, chunkSize: number = 400): string[] {
  return text.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
}

