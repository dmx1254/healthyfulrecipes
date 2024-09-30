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
    return `${diffInMins} min${diffInMins > 1 ? "s" : ""}`;
  }

  const diffInHours = Math.floor(diffInMins / 60);
  const remainingMins = diffInMins % 60;

  if (diffInHours < 24) {
    return remainingMins > 0
      ? `${diffInHours} hr${diffInHours > 1 ? "s" : ""} ${remainingMins} min${
          remainingMins > 1 ? "s" : ""
        }`
      : `${diffInHours} hr${diffInHours > 1 ? "s" : ""}`;
  }

  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    const remainingDays = diffInDays % 30;
    return remainingDays > 0
      ? `${diffInMonths} month${
          diffInMonths > 1 ? "s" : ""
        } ${remainingDays} day${remainingDays > 1 ? "s" : ""}`
      : `${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  const remainingMonths = diffInMonths % 12;
  return remainingMonths > 0
    ? `${diffInYears} year${
        diffInYears > 1 ? "s" : ""
      } ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
    : `${diffInYears} year${diffInYears > 1 ? "s" : ""}`;
}

export function splitTextIntoParagraphs(
  text: string,
  chunkSize: number = 400
): string[] {
  return text.match(new RegExp(`.{1,${chunkSize}}`, "g")) || [];
}

export const reviewsComments = Array.from({ length: 5 }, (_, index) => {
  return {
    indice: index + 1,
    title: `rate${index + 1}`,
  };
});

export const numDateConverted = (date: Date): string => {
  const dateConvert = new Date(date).toLocaleDateString("en-Us", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return dateConvert;
};

const colors = ["#0284c7", "#2563eb", "#0891b2", "#d97706", "#ea580c"];
const color = Math.floor(Math.random() * colors.length);
export const choosedColor = colors[color];

export type SearchParamsType = {
  [key: string]: string | string[] | undefined;
};
