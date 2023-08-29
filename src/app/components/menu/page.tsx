import React from 'react'
import Style from './style.module.css';
import { useState, useEffect } from 'react';
import {FiUser, FiHelpCircle, FiLogOut} from 'react-icons/fi';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
function menulist({stat}: Params) {

  return (
    <div className={`transition ease duration-200 ${stat ? 'absolute' : 'hidden'} -bottom-[19rem] text-black max-h-screen w-[300px] h-[300px] bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl`}>
        <div className='flex flex-col h-full py-5 gap-3'>

            <div className='ease duration-200 cursor-pointer hover:bg-slate-400 flex w-full justify-around bg-slate-300 items-center py-5 text-[22px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                <FiUser className='rounded text-[26px]' />
                <p>บัญชีของฉัน</p>
            </div>
            <div className='ease duration-200 cursor-pointer hover:bg-slate-400 flex w-full justify-around bg-slate-300 items-center py-5 text-[22px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                <FiHelpCircle className='rounded text-[26px]' />
                <p>ช่วยเหลือ</p>
            </div>
            <div className='text-white ease duration-200 cursor-pointer hover:bg-red-500 flex w-full justify-around bg-red-800 items-center py-5 text-[22px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                <FiLogOut className='rounded text-[26px]' />
                <p>ออกจากระบบ</p>
            </div>
            
        </div>
    </div>
  )
}

export default menulist