"use client";
import Loading from "@/components/Loading";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    if (loading) setLoading(false);
    else setLoading(true);
  };
  const handleGithubLogin = () => {
    handleLoading();
    signIn("github", { callbackUrl: "/dashboard" });
    handleLoading();
  };
  return (
    <div className="flex justify-center bg-white items-center h-screen">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col text-center">
          <div>
            <h1 className="text-4xl text-black pb-5">Sign In</h1>
          </div>
          <div className="group border bg-blue-600 rounded-xl text-l p-2 flex hover:bg-white hover:text-blue-600">
            <Image
              className="pr-1 group-hover:hidden"
              src="/github.svg"
              alt="github.svg"
              width={30}
              height={30}
            />
            <Image
              className="pr-1 hidden group-hover:flex"
              src="/github-black.svg"
              alt="github.svg"
              width={30}
              height={30}
            />
            <button onClick={handleGithubLogin}>Continue with Github</button>
          </div>
        </div>
      )}
    </div>
  );
}
