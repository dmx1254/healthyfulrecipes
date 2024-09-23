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
  title: "HealthyFul Recipes: Delicious Meals for a Healthier You",
  description: "Welcome to HealthyFul recipes , your trusted source for delicious, healthy recipes that bring joy to your table and wellness to your life. For over five years, we’ve been dedicated to transforming everyday ingredients into meals that not only satisfy your taste buds but also support your health. Whether you’re just starting your journey towards healthier eating or you’re looking to expand your culinary skills, our carefully curated recipes make it easy and enjoyable to cook nourishing, flavorful dishes.",
  icons:{
    icon:"/healthyfulrecipes-logo.png",
  }
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
