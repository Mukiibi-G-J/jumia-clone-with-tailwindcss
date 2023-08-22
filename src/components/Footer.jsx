"use client";
import { footer_options } from "@/data";
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
                className={`mr-2 ${isInputFocused ? "text-[#F68B1E]" : " "} hidden md:inline-block`}
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
      <div>
        <div className="px-8 py-4 grid grid-cols-1 mt-3 md:grid-cols-4 bg-[#535357]">
          {footer_options.map((footer_option, index) => (
            <div key={index} className="flex flex-col mt-3">
              <h1 className="text-white  text-[12px] font-[600] ">
                {footer_option.title}
              </h1>

              {footer_option.title === "JUMIA INTERNATIONAL" ? (
                <div className="mt-4">
                  <div className="grid grid-cols-2">
                    <>
                      {footer_option.options
                        .slice(0, 5)
                        .map((option, index) => (
                          <div>
                            <p key={index} className="text-white text-xs">
                              {option}
                            </p>
                          </div>
                        ))}
                      {footer_option.options.slice(6).map((option, index) => (
                        <div>
                          <p key={index} className="text-white text-xs">
                            {option}
                          </p>
                        </div>
                      ))}
                    </>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-1">
                  {footer_option.options.map((option, index) => (
                    <p key={index} className="text-white text-xs">
                      {option}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
