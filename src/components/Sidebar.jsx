"use client";
import React, { useState } from "react";
import Image from "next/image";

function Sidebar(props) {
  const [sidebarItems, setSidebarItems] = useState([
    {
      name: "Dashboard",
      isSelected: true,
    },
    {
      name: "Food Order",
      isSelected: false,
    },
    {
      name: "Favorite",
      isSelected: false,
    },
    {
      name: "Message",
      isSelected: false,
    },
    {
      name: "Order History",
      isSelected: false,
    },
    {
      name: "Bills",
      isSelected: false,
    },
    {
      name: "Settings",
      isSelected: false,
    },
  ]);

  const handleItemClick = (index) => {
    const updatedItems = sidebarItems.map((item, i) => ({
      ...item,
      isSelected: i === index,
    }));
    setSidebarItems(updatedItems);
  };

  return (
    <div className={"w-3/12 h-full relative bg-white"}>
      <div className="text-center pt-7 pb-6">
        <span
          className={
            "text-center text-zinc-800 text-4xl font-bold font-['Poppins']"
          }
        >
          GoMeal
        </span>
        <span className={"text-yellow-500 text-4xl font-bold font-['Poppins']"}>
          .
        </span>
      </div>
      {sidebarItems.map((item, index) => {
        const imageName = item.name.toLowerCase().replace(/\s+/g, "-");
        return (
          <div
            key={index}
            className="pt-4 flex justify-center"
            onClick={() => handleItemClick(index)}
          >
            <div
              className={`w-8/12 h-12 rounded-2xl justify-center items-center gap-6 inline-flex ${
                item.isSelected ? " bg-yellow-500" : ""
              }`}
            >
              <div className="w-1/4">
                <Image
                  width={50}
                  height={40}
                  src={`./Images/${
                    item.isSelected ? imageName + "White" : imageName
                  }.svg`}
                  alt="dashboard"
                  className="flex justify-between items-center"
                />
              </div>
              <div className="text-zinc-500 text-lg font-medium font-['Poppins'] w-3/4">
                {item.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
