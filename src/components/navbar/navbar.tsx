"use client"
import React from 'react'
import Image from 'next/image'
import Style from './navbar.module.css'
import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
// import Menulist from './menu/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

function Navbar() {
  let [SearchValue, setSearchValue] = useState('');
  // const [IsOpen, SetIsOpen] = useState<boolean>(false)


  // const Openmodal = () => {
  //   SetIsOpen(!IsOpen)
  // }

  return (
    <div className={`${Style.navbartop}`}>
      <div className='mx-8 grid grid-cols-2 gap-2'>
        <div className='flex py-8 items-center'>
          <div className=' w-full flex gap-5'>
            {/* <div className='relative flex' onClick={Openmodal}>
              <Image className='cursor-pointer' src='/hamburger.svg' width={30} height={30} alt='hamburger' />
              <Menulist stat={IsOpen}/>
            </div> */}
            <Link href={'/'}>
              <p className='text-[2rem] font-bold'>NPP.</p>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-end gap-[1.12rem]'>
            <div className='relative flex h-2/6 w-96 rounded-3xl items-center justify-end'>
              <input placeholder='ค้นหาสินค้า' type="text" className={`pl-4 pr-14 w-full h-full rounded-3xl bg-white boxsearch text-black`} />
              <FiSearch  className='absolute text-[2rem] font-[300] text-black rounded-full m-4'/>
            </div>
            
          <div className='ease duration-300 hover:bg-[#ff5e50] text-white  bg-[#FF5C00] px-[2rem] py-[0.5rem] rounded-[1.38rem] uppercase text-[1.3rem] cursor-pointer'>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

