"use client";
import React from "react";
import Image from "next/image";
import Style from "./navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
// import Menulist from './menu/page';
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  let [SearchValue, setSearchValue] = useState("");
  // const [IsOpen, SetIsOpen] = useState<boolean>(false)

  // const Openmodal = () => {
  //   SetIsOpen(!IsOpen)
  // }

  return (
    <div className={`${Style.navbartop}`}>
      <div className="mx-8 grid grid-cols-2 gap-2">
        <div className="flex py-8 items-center">
          <div className=" w-3/2 flex gap-1 justify-start">
            {/* Drawer */}
            <Drawer/>
            <Link href={"/"}>
              <p className="text-[2rem] font-bold">NPP.</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end gap-[1.12rem] ">
          

          <div className="ease duration-300 hover:bg-[#ff5e50] text-white  bg-[#FF5C00] px-[2rem] py-[0.5rem] rounded-[1.38rem] uppercase text-[1.3rem] cursor-pointer">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

export const Drawer = () => {
  return (
    <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn bg-transparent border-none"
                >
                <Image src={'/hamburger.svg'} width={35} height={35} alt='...'/>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
  );
}