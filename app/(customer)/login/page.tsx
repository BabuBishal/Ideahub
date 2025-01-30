import React from "react";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
const dmserif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const page = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-5 mt-12">
      <div className="mx-auto w-full max-w-[870px] rounded-xl sm:border border-zinc-200 max-sm:border-none sm:p-8 md:py-16 md:p-[90px] ">
        <h1 className="font-extrabold font-dmserif text-xl sm:text-3xl md:text-4xl">
          Customer Login
        </h1>
        <p className="text-sm sm:text-xl text-zinc-500 sm:mt-4">
          If you have an account, sign in with your email address.
        </p>
        <div className="mt-8 sm:mt-14 rounded">
          <form action="" method="post">
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email.example.com"
                aria-label="Email"
                required
                aria-required="true"
                className="w-full border rounded-md px-5 py-3 text-gray-600 outline-offset-4"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="mb-2 block">
                Password *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                aria-label="Password"
                required
                aria-required="true"
                className="w-full border rounded-md px-5 py-3 text-gray-600 outline-offset-4"
              />
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex select-none items-center gap-2">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="text-gray-500">
                  Show Password
                </label>
              </div>
              <div>
                <div className="block">
                  <Link
                    href="/forgot-password"
                    className="cursor-pointer text-base text-black max-sm:text-sm"
                  >
                    Forgot Password?
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="my-4 mt-6 flex justify-start">
              <button className="max-w-[374px] w-full text-white mr-auto bg-[#060C3B] p-4 text-lg font-normal rounded-2xl block hover:opacity-90 transition-all duration-400">
                Sign In
              </button>
            </div>
            <p className="mt-5 font-medium text-zinc-500 text-sm sm:text-lg max-sm:text-center">
              <span>New customer? </span>
              <Link href="/register" className="text-[#060C3B]">
                Create your account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
