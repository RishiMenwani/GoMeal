import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Google, GitHub, Twitter } from "@mui/icons-material";
import Image from "next/image";

const Login = () => {
  return (
    <div className="relative py-4 sm:max-w-xl sm:mx-auto  ml-70 mt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative backdrop-blur opacity-80 px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 p-5">
        <div className="">
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input
                  autocomplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                />
                <label
                  for="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
                <label
                  for="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="relative flex justify-end">
                <Button
                  variant="outlined"
                  className="bg-yellow-500 text-zinc-800 rounded-md px-2 py-1"
                >
                  Submit
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-gray-700 text-sm">
                  <Link href="#" underline="hover">
                    Forgot password?
                  </Link>
                </div>
                <div className="text-gray-700 text-sm">
                  <span>Don't have an account? </span>
                  <Link href="#" underline="hover">
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <Button
                  variant="contained"
                  className="bg-white text-black rounded-md px-4 py-2 w-full"
                >
                  <Image
                    src={"/Images/Login/google.svg"}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Login With Google
                </Button>
                <Button
                  variant="contained"
                  className="bg-black text-white rounded-md px-4 py-2 w-full"
                >
                  <Image
                    src={"/Images/Login/github.png"}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Login With Github
                </Button>
                <Button
                  variant="contained"
                  className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
                >
                  <Image
                    src={"/Images/Login/twitter.svg"}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Login With Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
