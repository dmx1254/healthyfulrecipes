import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignupPage() {
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
          <div className="flex flex-col items-center p-2 max-w-[300px]">
            {/* <h2 className="logo-text text-3xl font-bold text-green-600 mb-12">
              HealthyFulRecipes
            </h2> */}
            <h3 className="text-2xl font-bold mb-2">Create an account</h3>
            {/* <p className="mb-2">
              Sign up to rate and review your favorite HealthyFulRecipes
              recipes.
            </p> */}
          </div>

          <SignUp
            appearance={{
              //   elements: {
              //     rootBox:
              //       "flex flex-col items-center justify-center",
              //     card: "w-full max-w-md p-6 bg-white rounded-lg shadow-md",
              //     header: "text-2xl font-bold mb-6 text-center text-gray-800",
              //     socialButtons: "flex flex-col space-y-2 mb-4",
              //     socialButtonsBlockButton:
              //       "w-full flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
              //     socialButtonsBlockButtonText: "ml-2 text-gray-700",
              //     socialButtonsProviderIcon: "w-5 h-5",
              //     formButtonPrimary:
              //       "w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors",
              //     formFieldInput:
              //       "w-full p-2 border border-gray-300 rounded-md mt-1",
              //     footerActionLink: "text-blue-500 hover:text-blue-600",
              //     footer: "mt-6 text-center text-gray-600",
              //     dividerLine: "bg-gray-300",
              //     dividerText: "text-gray-500",
              //   },
              //   layout: {
              //     socialButtonsPlacement: "top",
              //     socialButtonsVariant: "blockButton",
              //   },

              elements: {
                socialButtons: "flex flex-col items-start",
              },

              layout: {
                socialButtonsVariant: "blockButton",
              },
            }}
            // localization={{
            //   socialButtonsBlockButton: {
            //     google: "Continue with Google",
            //     facebook: "Continue with Facebook",
            //     apple: "Continue with Apple",
            //     github: "Continue with GitHub",
            //   },
            //   signUp: {
            //     subtitle: "Create an account to get started",
            //   },
            // }}

            signInFallbackRedirectUrl="/sign-in"
          />
          {/* <div className="absolute w-full h-[90px] sm:top-[71%] bg-white z-50 rounded"></div> */}
          <div className="text-center max-w-[300px] text-sm self-center mt-6">
            By signing up, you agree to the{" "}
            <Link href="/" className="text-gray-800 border-b border-black/80">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-gray-800 border-b border-black/80">
              Privacy Policy
            </Link>
            . If you live in the US you will also opt in to EatingWell email
            communication.
          </div>
        </div>
      </div>
    </div>
  );
}
