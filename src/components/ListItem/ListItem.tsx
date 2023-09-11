import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React, { Key } from 'react'
import Image from 'next/image';
export default function listpay({Ar}: Params){
    return (
    <div className='flex w-full gap-5 px-8 mt-4 overflow-x-scroll md:overflow-x-hidden md:flex md:justify-center'>
      {Ar.map((val:any, index:Key)=> (
        
        <div key={index} className='md:p-3 flex text-center items-center justify-center p-1 gap-3 ease-in duration-100 cursor-pointer bg-slate-300 uppercase text-black rounded-md hover:bg-slate-400 hover:text-white '>
          <p className='text-[14px] w-full px-5'>{val.name}</p>
        </div>
      
      ))}
    </div>
  )
}
