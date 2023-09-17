"use client";
import React, { Key, useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function heroes({ Product }: Params){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, SetAmount] = useState(0);
    const IncreaseCounter = () => {
        SetAmount(amount + 1);
    }
    const DecreaseCounter = () => {
        amount <= 0 ? SetAmount(0) : SetAmount(amount - 1);
    }

  const discount = (
    Product.price -
    Product.price * (Product.discountPercentage / 100)
  )
    .toFixed(2)
    .toString();
  return (
    <div className="m-10 grid grid-cols-[1fr_1.5fr_3fr] max-w-full max-h-96 h-full gap-5">
      {/* make popup thumbmails */}
      <div className="flex flex-col items-center gap-5 max-h-full h-full overflow-y-scroll scroll-smooth ">
        {Product.images.map((val: string, idx: Key) => (
          <div
            key={idx}
            className="cursor-pointer w-[100px] h-[100px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
          >
            <Image
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "30px",
                objectFit: "cover",
              }}
              src={val}
              width={1000}
              height={1000}
              alt={val}
              quality={100}
              onClick={() =>
                (
                  document.getElementById(`${idx}`) as HTMLInputElement | any
                ).showModal()
              }
            />
            <dialog id={`${idx}`} className="modal">
              <div className="modal-box bg-white">
                <Image
                  className="contrast-125"
                  src={val}
                  width={1000}
                  height={1000}
                  alt="..."
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">ปิด</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
      <div className=" max-w-400 max-h-400 w-full h-full drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
        <Image
          style={{
            objectFit: "fill",
            height: "400px",
            width: "400px",
            borderRadius: "30px",
          }}
          quality={100}
          src={Product.thumbnail}
          width={1000}
          height={1000}
          alt="..."
        />
      </div>
      <div className=" max-w-full min-h-full text-black flex flex-col gap-4">
        <p className="text-2xl">{Product.title}</p>
        <p className="line-through opacity-50">ราคาปกติ {Product.price}</p>
        <div className="flex gap-10 items-center">
          <p className="text-white font-bold rounded-md bg-[#F00] px-5 py-3">
            - {Product.discountPercentage}%
          </p>
          <p className="font-bold text-2xl">$ {discount}</p>
        </div>
        <div className="flex gap-5 items-center">
          <p>จำนวน</p>
          <div className="flex bg-white items-center gap-5 rounded-md px-2  border-2 border-blue-500 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]">
            <FiPlus className="hover:rounded-full hover:bg-slate-300 cursor-pointer" onClick={IncreaseCounter} />
            <p className="text-center w-5">{amount}</p>
            <FiMinus className="hover:rounded-full hover:bg-slate-300 cursor-pointer" onClick={DecreaseCounter} />
          </div>
          <Like />
          ถูกใจ
        </div>
        <div className="flex gap-5">
          <div className="rounded-xl text-white px-5 py-2 bg-[#FF5C00] font-normal text-xl">
            ซื้อเลย
          </div>
          <div className="rounded-xl text-white flex items-center gap-3 px-5 py-2 bg-[#2f82ffe2] font-normal text-xl">
            <AiOutlineShoppingCart />
            ใส่รถเข็น
          </div>
        </div>
      </div>
    </div>
  );
}

const Like = () => {
  const [Like, SetLike] = useState<boolean>(false);
  const style = { size: 30, backgroud: "#FF5C00" };
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        SetLike(!Like);
      }}
    >
      {Like ? (
        <AiFillHeart
          size={style.size}
          color={style.backgroud}
          backgound={style.backgroud}
        />
      ) : (
        <AiOutlineHeart size={style.size} />
      )}
    </div>
  );
};
