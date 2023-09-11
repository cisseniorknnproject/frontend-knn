import React, { Key, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../../../lib/Products";

export default async function recommendation() {
  const { products } = await getProducts();

  return (
    <>
      <div className="text-black md:max-w-full rounded-xl bg-[#2F82FF] md:max-h-full w-full flex flex-row flex-nowrap items-center ">
        <div className="shadow-[2px_0px_5px_rgba(0,0,0,0.25)] p-10 w-full h-full flex items-center justify-center">
          <p className="-rotate-90 text-[24px] md:rotate-0 md:text-[34px] text-white font-bold">
            รายการสินค้าแนะนำ
          </p>
        </div>
        <div className="flex scroll-smooth snap-x overflow-x-scroll gap-5 items-center">
          {products.map((val: any, idx: Key) => {
            const discount =
              val.price - val.price * (val.discountPercentage / 100);
            return (
              // eslint-disable-next-line react/jsx-key
              <Link className="snap-center" href={`/product/${val.id}`}>
                <div
                  key={idx}
                  className={`m-3 flex justify-center ease duration-200 hover:bg-[#c1c1c1] cursor-pointer w-[200px] bg-white rounded-xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
                >
                  <div className="card w-[180px]">
                    {
                      <Image
                        objectFit="contain"
                        className="rounded-xl px-2 mix-blend-multiply mt-1  w-full h-[150px]"
                        src={val.images[0]}
                        width={1000}
                        height={1000}
                        alt="..."
                      />
                    }
                    <div className=" text-black p-4">
                      <p className="truncate text-[16px]">{val.title}</p>
                      <div className="flex flex-row items-center gap-2">
                        <p className="font-bold line-through">$ {val.price}</p>
                        <p className="font-bold text-red-500">
                          Now
                          {discount.toFixed(0).toString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
