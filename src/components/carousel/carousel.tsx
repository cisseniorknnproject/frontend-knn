"use client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import React, { Key } from "react";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiCircle } from "react-icons/fi";
function carousel({ slide }: Params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [CurrentSlide, setCurrentSlide] = useState<Number | any>(0);
  const NextSlide = () => {
    const isLastSlide: boolean = CurrentSlide === slide.length - 1;
    const newSlide: Number = isLastSlide ? 0 : CurrentSlide + 1;
    setCurrentSlide(newSlide);
  };
  const PrevSlide = () => {
    const IsFirstSlide = CurrentSlide === 0;
    const newSlide: Number = IsFirstSlide ? slide.length - 1 : CurrentSlide - 1;
    setCurrentSlide(newSlide);
  };
  const ToSlide = (id: Number) => {
    setCurrentSlide(id);
  };
  return (
    <div className=" col-span-2 max-h-[400px] relative drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl ">
      <Image
        className="duration-500 object-cover rounded-xl border-8 border-[#FF5C00] w-full h-[300px] md:h-full "
        width={1000}
        height={1000}
        src={slide[CurrentSlide].url}
        alt="..."
      />
      <div className="absolute px-5 flex top-[50%] max-w-full w-full justify-between text-black">
        <div
          onClick={PrevSlide}
          className="cursor-pointer bg-white rounded-full hover:bg-slate-200"
        >
          <FiChevronLeft className="  text-[35px] " />
        </div>
        <div
          onClick={NextSlide}
          className="cursor-pointer bg-white rounded-full hover:bg-slate-200"
        >
          <FiChevronRight className="text-[35px] " />
        </div>
      </div>
      <div className="absolute flex gap-3 justify-center bottom-[15px] w-full max-w-full  ">
        {slide.map((val: String, idx: number) => (
          <div key={idx}>
            <div
              key={idx}
              onClick={() => ToSlide(idx)}
              className={`cursor-pointer ease duration-100 hover:bg-gray-900 rounded-full ${
                idx == CurrentSlide
                  ? "text-[#ffffff] bg-[#ffffff]"
                  : "text-[#9a9a9a] bg-[#9a9a9a]"
              }`}
            >
              <FiCircle className={`text-[15px] rounded-full`}></FiCircle>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default carousel;
