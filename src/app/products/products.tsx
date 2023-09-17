import React, { Key, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../../lib/Products";
type Product = {
  id: Number;
  title: string;
  price: number;
  image: [];
};
async function Products() {
    const {products} = await getProducts();

  return (
    <div 
    className="grid grid-cols-2 w-full flex-wrap gap-1 p-1 justify-center
                md:grid-cols-5 md:w-6/12 md:gap-5">
      {products.map((val: any, idx: Key) => {
        
        return (
          <Link
            key={idx}
            className="flex justify-center"
            href={`/product/${val.id}`}
          >
            <div
              className="
                cursor-pointer 
                ease 
                duration-200 
                hover:bg-[#e1e1e1] hover:scale-[1.05] 
                drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
                hover:drop-shadow-[0px_4px_4px_rgba(0,0,100,0.25)]
                text-black rounded-xl 
                w-full
                h-[250px]
                bg-white 
                flex flex-col items-center 
                "
            >
              <Image
                className="mix-blend-multiply rounded-xl w-full h-[180px]"
                src={val.thumbnail}
                width={1000}
                height={1000}
                alt={val.title}
              />
              <div className="flex flex-col justify-evenly w-full px-4">
                <p className="truncate w-full">{val.title}</p>
                <div className="flex flex-row gap-5">
                  <p className="font-bold text-black ">$ {val.price} Dollar</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
