import React from "react";
import { myProducts } from "@/data";
import { ChevronRight } from "@mui/icons-material";

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
        {myProducts.map((category, index) => {
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
                          src={product.image}
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
                        <span className="text-md ">{product.price}</span>
                        {/* <span>🌟 🌟 🌟 🌟</span>
                        <button className="bg-[#FF9900] p-1 mb-4 rounded-xl mt-2 hover:bg-[#E4811C]">
                          Add to Cart
                        </button> */}
                      </div>
                      {/* <div className=""></div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
