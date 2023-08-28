import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react'

export default function listpay({Ar}: Params){
    return (
    <div className='flex overflow-x-scroll w-full justify-center gap-3 px-20'>
      {Ar.map((val, index)=> (
        
        <div key={index} className='max-w-full flex items-center justify-center  gap-3 ease-in duration-100 cursor-pointer w-full bg-slate-300 uppercase text-black text-center rounded-full py-3 hover:bg-slate-400 hover:text-white '>
          <img src="dummy.png" alt="" />
          <p className='text-[14px]'>{val.name}</p>
        </div>
      
      ))}
    </div>
  )
}
