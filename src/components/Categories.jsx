import { categories_1, categories_2 } from "@/data";
import React from "react";

function Categories() {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md grid grid-cols-8 mt-4">
        {categories_1.map((cat, index) => (
          <div className=" group cursor-pointer">
            <img
              key={index}
              src={cat}
              alt=""
              className="hover:shadow-md hover:bg-white transition-transform duration-200 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md rounded-md grid grid-cols-8 mt-4">
        {categories_2.map((cat, index) => (
          <div className=" group cursor-pointer">
            <img
              key={index}
              src={cat}
              alt=""
              className="hover:shadow-md hover:bg-white transition-transform duration-200 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
