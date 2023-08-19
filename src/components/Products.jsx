import React from "react";
import { ads, exp, myProductV2 } from "@/data";
import { ChevronRight } from "@mui/icons-material";
import dynamic from "next/dynamic";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Products() {
  return (
    <div>
      <div>
        {myProductV2.map((category, index) => {
          const shuffledProducts = shuffleArray([...category.products]);
          const selectedProducts = shuffledProducts.slice(0, 5);

          return (
            <div key={index}>
              <div className=" flex justify-between shadow-md mt-5 bg-[#FF9900]">
                <h2 className="text-lg p-2">{category.category}</h2>
                <div className="flex items-center justify-center  ">
                  <h2 className="text-sm">SEE ALL</h2>
                  <ChevronRight className="h-5 w-5 ml-2" />
                </div>
              </div>
              <div className="  grid xl:grid-cols-5 grid-cols-2 md:grid-cols-4  bg-gray-50 rounded-md px-2 shadow-md gap-1 ">
                {selectedProducts.map((product, prodIndex) => (
                  <div className="group cursor-pointer ">
                    <div
                      key={prodIndex}
                      className="flex p-6  pb-2 flex-col mt-5 bg-white items-center justify-center hover:rounded-md  hover:shadow-md hover:shadow-gray-50 hover:bg-white transition-transform duration-200 ease-in-out group-hover:scale-105 "
                    >
                      <div className="h-40 flex items-center justify-center">
                        <img
                          src={`product_images/${product.image}`}
                          alt=""
                          className="object-contain"
                        />
                      </div>

                      <div className="flex flex-col mt-8">
                        <span className="text-[16px] ">
                          {product.name.length > 20
                            ? product.name.slice(0, 20) + "..."
                            : product.name}
                        </span>
                        <span className="text-md">{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center bg-[#FF9900] p-2 mt-4">
            <p> Trend Setter Deals</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {ads.map((image, index) => (
              <div
                key={index}
                className=" mt-4  rounded-md transition-transform duration-200 ease-in-out hover:scale-105 "
              >
                <img src={image} alt="" className="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* big ad */}
      <div className="mt-4  ">
        <div className="flex items-center justify-center bg-[#FF9900] p-2 mt-4">
          <p>Don't miss out on these!</p>
        </div>
        <div className="flex item-center justify-center">
          <img src="/ad/big_ad.png" alt="" className="rounded-md w-[1500px]" />
        </div>
      </div>
      {/* Explore More */}
      <div>
        <div>
          <div className="flex items-center justify-center bg-[#FF9900] p-2 mt-4">
            <p> Explore More</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {exp.map((image, index) => (
              <div
                key={index}
                className=" mt-4  rounded-md transition-transform duration-200 ease-in-out hover:scale-105 "
              >
                <img src={image} alt="" className="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Products;
export default dynamic(() => Promise.resolve(Products), { ssr: false });
