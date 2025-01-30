"use client";
import React, { useState } from "react";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
const dmserif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-[1300px] mx-auto px-5 mt-12">
      <div className="mx-auto w-full max-w-[870px] rounded-xl sm:border border-zinc-200 max-sm:border-none sm:p-8 md:py-16 md:p-[90px] ">
        <h1 className="font-bold font-dmserif text-xl sm:text-3xl md:text-4xl">
          Become User
        </h1>
        <p className="text-sm sm:text-xl text-zinc-500 sm:mt-4">
          If you are new to our store, we are glad to have you as a member.
        </p>
        <div className="mt-8 sm:mt-14 rounded">
          <form action="" method="post" className="text-base">
            <div className="mb-4">
              <label htmlFor="firstname" className="mb-2 block">
                First Name *
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                aria-label="First Name"
                className="w-full border rounded-md px-3 py-2 sm:px-6 sm:py-4 text-gray-600 outline-offset-4 invalid:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="mb-2 block">
                Last Name *
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                aria-label="Last Name"
                className="w-full border rounded-md px-5 py-3 sm:px-6 sm:py-4 text-gray-600 outline-offset-4"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email.example.com"
                aria-label="Email"
                required
                aria-required="true"
                className="w-full border rounded-md px-5 py-3 sm:px-6 sm:py-4 text-gray-600 outline-offset-4"
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
                value={formData.password}
                onChange={handleChange}
                aria-label="Password"
                required
                aria-required="true"
                className="w-full border rounded-md px-5 py-3 sm:px-6 sm:py-4 text-gray-600 outline-offset-4"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="mb-2 block">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-label="Confirm Password"
                aria-required="true"
                className="w-full border rounded-md px-5 py-3 sm:px-6 sm:py-4 text-gray-600 outline-offset-4"
              />
            </div>
            <div className=" mb-4">
              <div className="flex select-none items-center gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  checked={formData.subscribe}
                  onChange={() =>
                    setFormData({ ...formData, subscribe: !formData.subscribe })
                  }
                />
                <label htmlFor="checkbox" className="text-gray-500">
                  Subscribe to newsletter
                </label>
              </div>
            </div>
            <div className="mb-4 mt-6 flex justify-start">
              <button className="max-w-[374px] w-full text-white mr-auto bg-[#060C3B] p-4 text-lg font-normal rounded-2xl block hover:opacity-90 transition-all duration-400">
                Register
              </button>
            </div>
            <p className="mt-5 font-medium text-zinc-500 text-sm sm:text-lg max-sm:text-center">
              <span>Already have an account ? </span>
              <Link href="/login" className="text-[#060C3B]">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
