import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React, { Key } from 'react'
import Image from 'next/image';
export default function listpay({Ar}: Params){
    return (
    <div className='flex w-full justify-center gap-3 px-20'>
      {Ar.map((val:any, index:Key)=> (
        
        <div key={index} className='max-w-full flex items-center justify-center  gap-3 ease-in duration-100 cursor-pointer w-full bg-slate-300 uppercase text-black text-center rounded-full py-3 hover:bg-slate-400 hover:text-white '>
          <div className='w-10 h-10'>
            <Image src="/dummy.png" alt="" width={1000} height={1000} />
          </div>
          <p className='text-[14px]'>{val.name}</p>
        </div>
      
      ))}
    </div>
  )
}
