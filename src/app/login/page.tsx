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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {/* Logo/Icon Area */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Sign in to continue to your dashboard
              </p>
            </div>

            {/* GitHub Login Button */}
            <button
              onClick={handleGithubLogin}
              className="w-full group relative bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center space-x-3">
                {/* GitHub Icon - White */}
                <Image
                  className="group-hover:scale-110 transition-transform duration-300"
                  src="/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                <span className="text-base md:text-lg">Continue with GitHub</span>
              </div>
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Alternative Options Info */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                By signing in, you agree to our{" "}
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
