import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="font-poppins w-full flex items-center justify-center h-screen">
      <div className="w-1/2">
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
        <div className="flex flex-col items-start">
        <h2 className="logo-text text-2xl font-bold text-green-600 mb-4">
            HealthyFulRecipes
          </h2>
          <h3 className="text-2xl font-bold">Login</h3>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
