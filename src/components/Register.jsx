// components/Register.js
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter()
  return (
    <div className="relative py-4 mx-auto max-w-md mt-24">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative backdrop-blur opacity-80 px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-10">
      <div className="">
        <div>
          <h1 className="text-xl font-semibold mb-4 sm:text-2xl">
            Register
          </h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-2 text-base leading-6 space-y-2 text-gray-700 sm:text-sm sm:leading-5">
            <div className="relative mb-2">
              <input
                autoComplete="off"
                id="email"
                name="email"
                type="text"
                className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-2.5 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-xs"
              >
               Enter Your Email
              </label>
            </div>
            <div className="relative mb-2">
              <input
                autoComplete="off"
                id="email"
                name="email"
                type="text"
                className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-2.5 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-xs"
              >
               Enter Your Name
              </label>
            </div>
            <div className="relative mb-2">
              <input
                autoComplete="off"
                id="password"
                name="password"
                type="password"
                className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-2.5 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-xs"
              >
                Enter Your Password
              </label>
            </div>
            <div className="relative mb-2">
              <input
                autoComplete="off"
                id="password"
                name="password"
                type="password"
                className="peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-2.5 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1.5 transition-all peer-focus:-top-2.5  peer-focus:text-gray-600 peer-focus:text-xs"
              >
                Confirm Password
              </label>
            </div>
            
            <div className="relative flex justify-end">
              <Button
                variant="outlined"
                className="bg-yellow-500 text-zinc-800 rounded-md px-3 py-1 text-sm"
                onClick={()=>{ router.push("/")}}
              >
                Submit
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
              
              <div className="text-gray-700 text-xs">
                <span>Already have an account? </span>
                <Link href="/login" underline="hover">
                  Sign In instead
                </Link>
              </div>
            </div>
            {/* <div className="mt-3 space-y-2">
              <Button
                variant="contained"
                className="bg-white text-black rounded-md px-3 py-1 flex items-center justify-center"
              >
                <Image
                  src={"/Images/Login/google.svg"}
                  width={16}
                  height={16}
                  className="mr-1"
                />
                SignIn With Google
              </Button>
              <Button
                variant="contained"
                className="bg-black text-white rounded-md px-3 py-1 flex items-center justify-center"
              >
                <Image
                  src={"/Images/Login/github.png"}
                  width={16}
                  height={16}
                  className="mr-1"
                />
               SignIn With Github
              </Button>
              <Button
                variant="contained"
                className="bg-blue-500 text-white rounded-md px-3 py-1 flex items-center justify-center"
              >
                <Image
                  src={"/Images/Login/twitter.svg"}
                  width={16}
                  height={16}
                  className="mr-1"
                />
                SignIn With Twitter
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
