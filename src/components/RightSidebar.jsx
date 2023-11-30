"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import background from "@/../../public/Images/RightSidebar/balance-background.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

const RightSidebar = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSliderComplete = () => {
    // Perform your action when the slider is slid fully
    if (sliderValue === 100) {
      // Your action here
      console.log("Slider slid fully!");
    }
  };

  const orderMenu = ["Pepperoni Pizza", "Cheese Burger", "Jain Pizza"];
  return (
    <div className="flex flex-col px-3 py-5">
      {/* Container for the first three images */}
      <div className="flex flex-row justify-start space-x-3">
        <div className="relative">
          <Image
            src={"./Images/RightSidebar/order-discussion.svg"}
            width={30}
            height={27}
          />
        </div>
        <div className="relative">
          <Image
            src={"./Images/RightSidebar/notification.svg"}
            width={30}
            height={25}
          />
        </div>
        <div className="relative">
          <Image
            src={"./Images/RightSidebar/setting.svg"}
            width={30}
            height={25}
          />
        </div>
        <div className="flex-grow" />
        <div className="relative justify-end">
          <Image
            src={"/Images/RightSidebar/placeholder.png"}
            width={38}
            height={25}
          />
        </div>
      </div>

      {/* Container for the placeholder image and "Your Balance" text */}
      <div className="flex items-start justify-start mt-10">
        <div className="text-zinc-800 text-2xl font-bold font-['Poppins'] ml-2">
          Your Balance
        </div>
      </div>
      <div className="h-24 grid rounded-3xl grid-flow-col grid-rows-3 p-4 gap-2 bg-gradient-to-tl from-orange-500 to-yellow-500">
        <div className="row-span-3 col-span-2 rounded-2xl p-2 bg-white">
          <div class="text-zinc-800 text-sm font-normal pl-2 font-['Poppins']">
            Balance
          </div>
          <div className="text-zinc-800 text-3xl font-bold font-['Poppins'] pl-2">
            $12.000
          </div>
        </div>
        <div className="row-end-3 w-12 row-span-2 rounded-2xl p-3 ml-2 bg-white">
          <Image
            src={"/Images/RightSidebar/income.svg"}
            width={25}
            height={25}
          />
        </div>
        <div className="row-end-3 w-12 row-span-2  rounded-2xl p-3 bg-white">
          <Image
            src={"/Images/RightSidebar/profit.svg"}
            width={25}
            height={25}
          />
        </div>
      </div>

      <div className="text-zinc-500 text-lg font-normal font-['Poppins'] mt-4">
        Your Address
      </div>
      <div className="flex flex-row justify-start">
        <Image
          src={"/Images/RightSidebar/location.svg"}
          width={20}
          height={20}
        />
        <div class="text-zinc-800 text-lg font-bold font-['Poppins'] ml-2">
          Elm Street, 23
        </div>
        <div className="flex-grow" />
        <div class="w-20 flex justify-center items-center rounded-lg border border-yellow-500">
          <div class="text-yellow-500 text-sm font-normal font-['Poppins']">
            Change
          </div>
        </div>
      </div>
      <div class="text-zinc-400 text-sm font-normal font-['Poppins'] leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </div>
      <div className="flex flex-row space-x-2 mt-2">
        <div class="w-28 h-8 flex justify-center items-center rounded-lg border border-zinc-400">
          <div class="text-zinc-800 text-sm font-normal font-['Poppins']">
            Add Details
          </div>
        </div>
        <div class="w-28 h-8 flex justify-center items-center rounded-lg border border-zinc-400">
          <div class="text-zinc-800 text-sm font-normal font-['Poppins']">
            Add Note
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start mt-4">
        <div className="text-zinc-800 text-2xl font-bold font-['Poppins'] ml-2">
          Order Menu
        </div>
      </div>
      <div>
        {orderMenu.map((item, i) => {
          return (
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 55 }}
                  image={`/Images/RightSidebar/order${(i + 1).toString()}.png`}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography ml={4} component="div" variant="h6">
                    {item}
                  </Typography>

                  <div className="ml-8 flex ">
                    x1
                    <div className="ml-48">
                      <span className="text-zinc-800 text-lg font-semibold font-['Poppins']">
                        +
                      </span>
                      <span className="text-yellow-500 text-lg font-semibold font-['Poppins']">
                        $
                      </span>
                      <span className="text-zinc-800 text-lg font-semibold font-['Poppins']">
                        5.59
                      </span>
                    </div>
                  </div>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div class="text-zinc-400 text-md font-medium font-['Poppins'] mt-4 flex flex-row">
        Service
        <div className="ml-64">
          <span className="text-zinc-800 text-lg font-medium font-['Poppins']">
            +
          </span>
          <span className="text-yellow-500 text-lg font-medium font-['Poppins']">
            $
          </span>
          <span className="text-zinc-800 text-lg font-medium font-['Poppins']">
            1.00
          </span>
        </div>
      </div>
      <div class="text-zinc-800 text-lg font-medium font-['Poppins'] mt-4 flex flex-row">
        Total
        <div className="ml-64">
          <span className="text-zinc-800 text-lg font-medium font-['Poppins']">
            +
          </span>
          <span className="text-yellow-500 text-lg font-medium font-['Poppins']">
            $
          </span>
          <span className="text-zinc-800 text-2xl font-medium font-['Poppins']">
            202.00
          </span>
        </div>
      </div>
      <Box
        sx={{
          border: 1,
          height: "60px",
          borderRadius: 2,
          borderColor: "#F8B602",
          backgroundColor: "#F5F5F5",
          display: "inline-flex",
          boxShadow: 1,
          m: 2,
        }}
      >
        <Image
          src={"/Images/RightSidebar/coupon1.svg"}
          width={60}
          height={60}
          className="ml-16"
        />
        <Box
          sx={{
            fontSize: "21",
            mt: "12px",
            ml: 3,
          }}
        >
          Have a Coupon Code
          <Button sx={{ display: "inline-flex" }}>
            <Image
              src={"/Images/RightSidebar/next-arrow.svg"}
              width={20}
              height={60}
            />
          </Button>
        </Box>
      </Box>
      <div
        style={{
          width: "auto",
          height: "100px",
          padding: "20px",
          position: "relative",
        }}
      >
        <Typography gutterBottom>Slide to Checkout!</Typography>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          onChangeCommitted={handleSliderComplete}
          aria-labelledby="continuous-slider"
          step={50}
          marks
          sx={{ color: "#F8B602", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default RightSidebar;
