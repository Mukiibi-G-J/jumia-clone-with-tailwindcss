"use client";
import { Mail } from "@mui/icons-material";
import React, { useState } from "react";

function Footer() {
  const [isInputFocused, setInputFocused] = useState(false);
  console.log(isInputFocused);
  const handleInputFocus = () => {
    setInputFocused(true);
    console.log(isInputFocused);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };
  return (
    <div className="">
      <div className="px-8 py-4 bg-[#313133] grid grid-cols-1 space-y-4  xl:flex xl:items-center xl:justify-between">
        <div>
          <img src="/logos/logo_white-1.png" alt="" className="h-8 " />
        </div>
        <div className="space-y-2 ">
          <p className="text-white font-bold text-sm">NEW TO JUMIA?</p>
          <p className="text-white text-xs">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="flex items-center space-x-2">
            <div
              className={`bg-white p-2 rounded-sm ${
                isInputFocused ? "border border-[#F68B1E] rounded-sm" : ""
              }`}
            >
              <Mail
                className={`mr-2 ${isInputFocused ? "text-[#F68B1E]" : ""}`}
              />
              <input
                type="text"
                placeholder="Enter Email"
                className={`
                    border-none outline-none
                `}
                // onFocus={() => handleInputFocus}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
            </div>
            <button className="bg-[#313133] text-white border border-white rounded-sm p-2  hover:border-[#F68B1E]">
              MALE
            </button>
            <button className="bg-[#313133] text-white border  border-white rounded-sm p-2 hover:border-[#F68B1E]">
              FEMALE
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center ">
            <img src="/logos/icons_1.png" alt="" />
            <div className="space-y-2">
              <p className="text-white text-sm">DOWNLOAD JUMIA FREE APP</p>
              <p className="text-white text-xs">
                Get access to exclusive offers!
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="logos/app_store.svg" alt="" className="h-32" />
            <img src="logos/play_store.svg" alt="" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
