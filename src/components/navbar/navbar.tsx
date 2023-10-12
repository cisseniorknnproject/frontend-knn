"use client";
import React from "react";
import Image from "next/image";
import Style from "./navbar.module.css";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "@/app/login/page";
import Register from "@/app/register/page";
import { useSession } from "next-auth/react";
import { data } from "autoprefixer";
export default function Navbar() {

  const { data: session, status } = useSession();
  return (
    <div className={`${Style.navbartop}`}>
      <div className="mx-8 grid grid-cols-2 gap-2">
        <div className="flex py-8 items-center">
          <div className=" w-3/2 flex gap-1 justify-start">
            {/* Drawer */}
            <Drawer />
            <Link href={"/"}>
              <p className="text-[2rem] font-bold">NPP.</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end gap-[1.12rem] ">

          {session ?
            <p>{session.user?.name}</p>
            :
            <LoginButton />
          }
        </div>
      </div>
    </div>
  );
}
const LoginButton = () => {
  const googleSignIn = () => {
    signIn('google')
  }
  return <>
    <button onClick={() => (document.getElementById('modal_login') as HTMLInputElement | any).showModal()} className="delay-50 ease-in duration-75 hover:bg-[#ff6f3e] bg-[#FF5C00] px-5 py-2 rounded-xl text-center uppercase font-bold text-white">Login</button>
    <dialog id="modal_login" className=" modal modal-bottom sm:modal-middle">
      <div className="modal-box h-full">
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-transparent text-2xl font-light rounded-full border-none ">X</button>
          </form>
        </div>
        <div className=" flex flex-col w-full h-4/5 justify-between align-middle  items-center ">
          <div className="flex flex-col items-center gap-5">
            <p className="font-bold text-5xl text-black">NPP.</p>
            <p className="font-black text-black">เพื่อนคู่นักช็อป</p>
            <p className="font-bold opacity-50 text-black">Best Hobby Buddy</p>
          </div>

          <div className="flex flex-col mt-5 gap-10 w-8/12">
            <div onClick={googleSignIn} className="cursor-pointer flex justify-center border border-gray-300 rounded-xl gap-8 w-full py-2">
              <Image src={'icon/google.svg'} width={35} height={35} style={{ width: '25px', height: 'auto' }} alt="google icon" />
              <p className="text-[14px] font-light">ลงชื่อด้วย Google</p>
            </div>
            <div onClick={() => (document.getElementById('modal_formLogin') as HTMLInputElement | any).showModal()} className="cursor-pointer flex justify-center border border-gray-300 rounded-xl gap-8 w-full py-2">
              <Image src={'icon/email.svg'} width={35} height={35} style={{ width: '25px', height: 'auto' }} alt="google icon" />
              <p className="text-[14px] font-light">ลงชื่อด้วย Email</p>
            </div>
          </div>
          <div className="w-full flex flex-col relative h-auto">
            <Image className="absolute -z-10 -top-24" src={'background/form-back.svg'} style={{ height: 'auto' }} width={1000} height={600} alt="formBack" />
            <div className="w-full flex justify-center mt-16">
              <p><Link className=" text-blue-700" href={''}>ข้อตกลงและเงื่อนไข </Link>และ <Link className=" text-blue-700" href={''}>นโยบายความเป็นส่วนตัว</Link> ของบริษัท</p>
            </div>
            <div onClick={() => (document.getElementById('register_form') as HTMLInputElement | any).showModal()} className="py-2 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer flex justify-center mt-16">
              <p className="text-md text-white font-bold underline underline-offset-2 uppercase" >Sign Up</p>
            </div>

          </div>
        </div>
      </div>
    </dialog>

    <LoginForm />
    <Register />
  </>
}

export const Drawer = () => {
  const { data: session, status } = useSession();
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn bg-transparent border-none"
        >
          <Image src={'/hamburger.svg'} width={35} height={35} alt='...' />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">

          <li className=" rounded-md text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div>ช่วยเหลือ</div>
          </li>
        </ul>
        {
          (status === 'authenticated') ?

            <ul className="menu p-4 w-80 gap-5 min-h-full bg-base-200 text-base-content relative">
              <Link href={'./user/profile'}>
              <li className="rounded-md text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <div>บัญชีของฉัน</div>
              </li>
              </Link>
              <li className="rounded-md text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <div>ช่วยเหลือ</div>
              </li>
              <li className="bg-[#f00] rounded-md text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" onClick={() => { signOut() }}>
                <div>ออกจากระบบ</div>
              </li>
            </ul>

            : ''
        }

      </div>
    </div>
  );
}