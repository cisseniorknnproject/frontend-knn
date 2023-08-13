import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='sticky top-0 text-black min-h-full shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
      <div className='mx-8 grid grid-cols-2 gap-2'>
        <div className='flex py-8 items-center'>
          <div className='w-full flex gap-5'>
            <Image className='cursor-pointer' src='/hamburger.svg' width={50} height={50} alt='hamburger' />
            <p className='text-[2.8125rem] font-bold'>NPP.</p>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <div className='text-white  bg-[#FF5C00] px-[1.94rem] py-[1.19rem] rounded-[1.38rem] uppercase text-[1.4375rem] cursor-pointer'>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar