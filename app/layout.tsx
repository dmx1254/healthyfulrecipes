import type { Metadata } from "next";
import { Inter, Lora, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster, toast } from "sonner";

import { ClerkProvider } from "@clerk/nextjs";
import { localization } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  applicationName: "HealthyFulRecipes",
  keywords: [
    "healthy recipes",
    "meal plans",
    "healthy eating",
    "healthy lifestyle",
    "special diets",
    "diabetes",
    "news",
    "articles",
    "balanced diet",
    "quick healthy recipes",
    "weekly meal plan",
    "healthy meal prep",
    "diet plan",
    "balanced eating",
    "nutritious diet",
    "clean eating",
    "wellness",
    "fitness tips",
    "wellness tips",
    "lifestyle changes",
    "gluten-free",
    "keto diet",
    "vegetarian",
    "vegan diet",
    "low carb",
    "dairy-free",
    "diabetic-friendly recipes",
    "diabetes management",
    "low-sugar meals",
    "blood sugar control",
    "health news",
    "wellness news",
    "nutrition updates",
    "health trends",
    "fitness news",
    "nutrition articles",
    "healthy living tips",
    "wellness insights",
    "diet tips",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  title: "HealthyFul Recipes: Delicious Meals for a Healthier You",
  description:
    "Welcome to HealthyFul recipes , your trusted source for delicious, healthy recipes that bring joy to your table and wellness to your life. For over five years, we’ve been dedicated to transforming everyday ingredients into meals that not only satisfy your taste buds but also support your health. Whether you’re just starting your journey towards healthier eating or you’re looking to expand your culinary skills, our carefully curated recipes make it easy and enjoyable to cook nourishing, flavorful dishes.",
  icons: {
    icon: "/healthyfulrecipes-logo.png",
    shortcut: "/healthyfulrecipes-logo.png",
    apple: "/healthyfulrecipes-logo.png",
    
  },
  metadataBase: new URL("https://healthyfulrecipes.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HealthyFul Recipes: Delicious Meals for a Healthier You",
    description:
      "Welcome to HealthyFul recipes , your trusted source for delicious, healthy recipes that bring joy to your table and wellness to your life. For over five years, we’ve been dedicated to transforming everyday ingredients into meals that not only satisfy your taste buds but also support your health. Whether you’re just starting your journey towards healthier eating or you’re looking to expand your culinary skills, our carefully curated recipes make it easy and enjoyable to cook nourishing, flavorful dishes.",
    images: [
      {
        url: "https://healthyfulrecipes.vercel.app/creamy-pasta.png",
        width: 600,
        height: 600,
        alt: "Creamy Chicken Pasta with Brussels Sprouts & Artichokes",
      },
      {
        url: "https://healthyfulrecipes.vercel.app/garlic-lim.png",
        width: 600,
        height: 460,
        alt: "Garlic-Lime Pork with Farro & Spinach",
      },
      {
        url: "https://healthyfulrecipes.vercel.app/healthyfulrecipes-logo.png",
        width: 400,
        height: 400,
        alt: "healthyfulrecipes logo",
      },
    ],
    url: "https://healthyfulrecipes.vercel.app",
    siteName: "healthyfulrecipes",

    locale: "en-US",
    type: "website",
  },
  formatDetection: {
    email: true,
    telephone: false,
    address: false,
  },

  twitter: {
    card: "summary_large_image", // Type de carte
    title: "HealthyFul Recipes: Delicious Meals for a Healthier You", // Titre de votre contenu
    description:
      "Welcome to HealthyFul recipes , your trusted source for delicious, healthy recipes that bring joy to your table and wellness to your life. For over five years, we’ve been dedicated to transforming everyday ingredients into meals that not only satisfy your taste buds but also support your health. Whether you’re just starting your journey towards healthier eating or you’re looking to expand your culinary skills, our carefully curated recipes make it easy and enjoyable to cook nourishing, flavorful dishes.", // Description
    // siteId: '@votre_site',  Facultatif, utilisé pour vos propres partages
    creator: "Sophie miller", // Facultatif, utilisé pour vos propres partages
    images: {
      url: "https://healthyfulrecipes.vercel.app/healthyfulrecipes-logo.png", // URL de l'image à afficher dans la carte
      alt: "HealthyFul Recipes: Delicious Meals for a Healthier You", // Texte alternatif pour l'image
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body
          className={clsx(
            poppins.variable,
            lora.variable,
            "h-full w-full bg-white font-sans antialiased"
          )}
        >
          <Toaster />

          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
