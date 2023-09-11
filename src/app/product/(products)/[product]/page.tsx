"use client";
import React, { FC, Key, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { getOneProdcutse } from "../../../../../lib/Products";

interface pageProps {
  params: {
    product: number;
  };
}

const Productdetail: FC<pageProps> = ({ params }) => {
  const [Productdetail, SetProductdetail] = useState<any | []>();
  const [Count, setCount] = useState(1);
  const [Like, SetLike] = useState(false);
  const [Load, SetLoad] = useState(true);
  
  const getDetail = async () => {
    const id = params.product;
    const Pro = await getOneProdcutse(id);
    SetProductdetail(Pro);
  };

  useEffect(() => {
    getDetail();
    SetLoad(false);
  }, []);
  const IncreaseProduct = () => {
    setCount((count) => count + 1);
  };

  const DecreaseProduct = () => {
    Count == 1 ? setCount(1) : setCount((count) => count - 1);
  };
  const setHeart = () => {
    SetLike(!Like);
  };

  return (
    <div className="bg-[#2F82FF] min-w-screen w-full min-h-screen p-24 flex flex-col">
      <p className="text-[36px] text-white font-extrabold">{`สินค้า ${Productdetail?.title}`}</p>
      <div className="max-w-screen max-h-screen w-full h-[90rem] bg-white rounded-xl flex flex-col">
        <div className="m-5 grid grid-cols-[1fr_1fr_3fr] max-w-full max-h-[40rem]">
          <div className="scroll-smooth m-5 snap-y flex items-center flex-col w-[300px] h-[400px] gap-5 overflow-y-scroll">
            {Productdetail?.images?.map((val: any, idx: Key) => {
              return (
                <>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <div key={idx} className="text-black w-[200px] h-[500px]">
                    <Image
                      onClick={() =>
                        (
                          document.getElementById(`${idx}`) as
                            | HTMLInputElement
                            | any
                        ).showModal()
                      }
                      className="snap-center  w-full h-[200px] m-3 cursor-pointer rounded-3xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                      objectFit="cover"
                      key={idx}
                      src={val}
                      width={1000}
                      height={1000}
                      alt={Productdetail.title}
                    />
                    <dialog id={`${idx}`} className="modal">
                      <div className="modal-box">
                        <Image
                          objectFit="contain"
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
                </>
              );
            })}
          </div>
          {
            <div className="m-5 flex flex-col rounded-3xl h-[300px] gap-5  bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <Image
                className="w-[400px]  h-full rounded-3xl"
                objectFit="contain"
                src={Productdetail?.images[0]}
                width={1000}
                height={1000}
                alt={Productdetail?.title}
              />
            </div>
          }

          <div className="text-black m-5 flex flex-col w-[500px] h-[300px] gap-2  ">
            <div className="flex flex-col gap-5">
              <p className="text-[28px] font-bold">{Productdetail?.title}</p>
              <p className=" opacity-50 line-through">
                ราคาปกติ ${Productdetail?.price}
              </p>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-[20px] bg-[#ff0000]  p-1 rounded-[0.4375rem] text-white font-bold">
                  {" "}
                  -{Productdetail?.discountPercentage}% ส่วนลด
                </p>
                <p className="text-[24px] font-bold">
                  ${" "}
                  {(
                    Productdetail?.price -
                    Productdetail?.price *
                      (Productdetail?.discountPercentage / 100)
                  ).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="opacity-50">จำนวน</p>
                <div className="flex items-center gap-5 border border-neutral-400 rounded-md mx-2 px-2">
                  <div
                    className="cursor-pointer hover:bg-slate-300 ease duration-150 rounded-full"
                    onClick={DecreaseProduct}
                  >
                    <FiMinus ClassName="cursor-pointer" />
                  </div>
                  <p className="text-[14px]">{Count}</p>
                  <div
                    className="cursor-pointer hover:bg-slate-300 ease duration-150 rounded-full"
                    onClick={IncreaseProduct}
                  >
                    <FiPlus />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    onClick={setHeart}
                    className="cursor-pointer text-[30px] p-1 hover:bg-slate-200 rounded-full"
                  >
                    {Like ? (
                      <AiFillHeart style={{ color: "red" }} />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </div>
                  <p className="text-[#747474]">ถูกใจ</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="ease duration-150 bg-[#FF5C00] cursor-pointer hover:bg-[#DD5100] text-white font-regular p-2 rounded-xl text-[20px] px-10">
                  ซื้อเลย
                </div>
                <div className="ease duration-150 bg-[#2F82FFB0] cursor-pointer hover:bg-[#2267D0B0] text-white font-regular p-2 rounded-xl px-10 text-[20px] flex items-center gap-2">
                  <AiOutlineShoppingCart />
                  <div className="">ใส่รถเข็น</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          <div className="m-5 p-5 text-black text-[20px] bg-[#F8F8F8] w-[97%]">
            <p className="font-bold">รายละเอียดสินค้า</p>
            <div className="text-[18px] flex flex-col">
              <p>{Productdetail?.description}</p>
              <p>แบรนด์สินค้า: {Productdetail?.brand}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Productdetail;

function PopUp(url: string) {
  const Id = url.split("/").pop();
  return (
    <dialog id={Id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-3xl">{Id}</h3>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">X Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
