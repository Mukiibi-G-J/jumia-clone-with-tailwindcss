import {
  HelpOutlineOutlined,
  KeyboardArrowDownOutlined,
  Person,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  return (
    <nav className="  bg-white shadow-lg">
      <div>
        <img src="/logos/jumia-group-logo" alt="" />
      </div>
      <div className="px-8 py-4">
        <div className="xl:flex items-center justify-between  hidden ">
          <div className=" block">
            <img src="/logos/logo.png" width="139" height="36" alt="" />
          </div>
          <div className="flex items-center px-40 flex-grow space-x-2 justify-center">
            <div className="flex items-center flex-grow space-x-2 p-2  border-black border border-solid rounded-lg">
              <Search />
              <input
                className="outline-none flex-1"
                type="text"
                placeholder="Search products, brands and categories"
              />
            </div>

            <button className="flex bg-[#FF9900]  hover:bg-[#E4811C] text-white shadow-xl  p-2 rounded-md font-semibold font-sans">
              search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 hover:text-[#F68B1E]">
              <Person />

              <p className="">Account</p>
            </div>
            <div className="flex items-center space-x-1 hover:text-[#F68B1E] ">
              <HelpOutlineOutlined />
              <p className="">Help</p>
              <KeyboardArrowDownOutlined />
            </div>

            <Link href="/cart">
              <div className="flex items-center space-x-1 hover:text-[#F68B1E]">
                <div className="flex items-center">
                  <div className="bg-[#FF9900] absolute top-2 right-12 rounded-full px-1.5 py-0.5 ">
                    <p className="text-white text-sm">
                      {
                        //   cart.cartItems.length
                        //   ||
                        "0"
                      }
                    </p>
                  </div>
                  <ShoppingCartOutlined />
                </div>

                <p className="">cart</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="space-y-4 xl:hidden ">
          <div className="flex items-center justify-between  ">
            <div className="flex items-center space-x-2">
              <MenuIcon />
              <div className="flex">
                <img src="/logos/logo.png" width="120" height="36" alt="" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Person />
              <div className="flex items-center relative">
                <div className="bg-[#FF9900] absolute bottom-4 left-3 1 rounded-full px-1.5 py-0.5 ">
                  <p className="text-white text-xs">
                    {
                      //   cart.cartItems.length
                      //   ||
                      "0"
                    }
                  </p>
                </div>
                <ShoppingCartOutlined />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-grow space-x-2 p-1  border-black border border-solid rounded-2xl">
            <Search />
            <input
              className="outline-none flex-1"
              type="text"
              placeholder="Search products, brands and categories"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
