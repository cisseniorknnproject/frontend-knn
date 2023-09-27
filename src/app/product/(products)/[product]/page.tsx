import React, { FC, Key, Suspense, useEffect, useState } from "react";
import Heroes from "./heroes";
import { getOneProdcutse } from "../../../../../lib/Products";


const product = async ({params} : any | String) => {
  const id = params.product;
  const product = await getOneProdcutse(id);

  return (
    <div className="bg-[#2F82FF] min-w-screen w-full min-h-screen p-24 flex flex-col">
      <p className="text-[36px] text-white font-extrabold">{`สินค้า ${product?.title}`}</p>
      <div className="max-w-screen max-h-screen w-full h-[90rem] bg-white rounded-xl flex flex-col">      
          <Heroes Product= {product}/>
      
      </div>
    </div>
    );
  
};

export default product;

