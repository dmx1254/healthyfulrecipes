import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="font-poppins w-full flex items-center justify-center h-screen">
      <div className="w-1/2 max-lg:hidden">
        <Image
          src="/assets/login/login-desktop.webp"
          alt="login-desktop-image"
          width={400}
          height={100}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="h-screen w-full"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center p-2">
            {/* <h2 className="logo-text text-2xl font-bold text-green-600 mb-12">
              HealthyFulRecipes
            </h2> */}
            <h3 className="text-2xl font-bold mb-6">Login</h3>
          </div>

          <SignIn
            appearance={{
              elements: {
                socialButtons: "flex flex-col items-start",
              },

              layout: {
                socialButtonsVariant: "blockButton",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
