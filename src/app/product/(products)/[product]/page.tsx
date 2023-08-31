"use client"
import type { Metadata } from 'next'
import next from 'next/types';
import React, { FC, useEffect, useState }from 'react'
import Image from 'next/image';
import {FiPlus, FiMinus} from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

  
interface pageProps{
  params: {
    product: String
  }
}
interface Data {
  readonly id: String
  title: String,
  description: String,
  price: String,
  stock: Number,
  brand: String,
  category: String,
  images: []
}

const Productdetail: FC<pageProps> = ({ params }) =>{
  const id = params.product;
  const url = "https://dummyjson.com/products/" + id
  const [Productdetail, SetProductdetail] = useState();
  const [Loading, SetLoaing] = useState(false);
  const [Count, setCount] = useState(1);
  const [Like, SetLike] = useState(false);
  
  const IncreaseProduct = () => {
      setCount((count) => count+1) 
  }
  
  const DecreaseProduct = () => {
    (Count == 1 ) ?  setCount(1)  :  setCount((count) => count - 1) 
    
  }
  const setHeart = () => {
    SetLike(!Like)
  }
  async function fetchData<Data>() {
    SetLoaing(true)
    const response = await fetch(url, { next: {revalidate: 60}})
    const data:Data = await response.json();
    SetProductdetail(data)
    SetLoaing(false)
  }  
  useEffect(() => {
      fetchData();
  },[])
  
  

  return (
    <div className='bg-[#2F82FF] min-w-screen w-full min-h-screen p-24 flex flex-col'>
      <p className='text-[36px] text-white font-extrabold'>{Loading ? 'Waiting...' : `สินค้า ${Productdetail?.title}`}</p>
      <div className='max-w-screen max-h-screen w-full h-[90rem] bg-white rounded-xl flex flex-col'>
          <div className='m-5 grid grid-cols-[1fr_1fr_3fr] max-w-full max-h-[40rem]'>
            
            <div className='m-5 flex items-center flex-col w-[200px] h-[300px] gap-5 overflow-y-scroll'>
               {
              Loading ? 
              <div className='flex flex-col gap-10'>
                <div className='w-[100px] h-[100px] rounded-md bg-slate-400 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>
                <div className='w-[100px] h-[100px] rounded-md bg-slate-400 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>
              </div> 
              : 
              Productdetail?.images?.map((val,idx) => (
                <Image className='m-3 cursor-pointer rounded-3xl w-[150px] h-[300px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' objectFit='contain' key={idx} src={val} width={1000} height={1000} alt={Productdetail.title}/>
              ))
             }
            </div>
            
            {Loading ?
              <div className='animate-pulse m-5 flex flex-col rounded-3xl h-[300px] gap-5 overflow-y-scroll bg-slate-400 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                {/* <Image className='w-[400px]  h-full' src={Productdetail?.images[0]} width={1000} height={1000} alt={Productdetail?.title}/> */}
              </div> 
             : 
              <div className='m-5 flex flex-col rounded-3xl h-[300px] gap-5 overflow-y-scroll bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                <Image className='w-[400px]  h-full' src={Productdetail?.images[0]} width={1000} height={1000} alt={Productdetail?.title}/>
              </div>
            }

            <div className='text-black m-5 flex flex-col w-[500px] h-[300px] gap-2 overflow-y-scroll '>
            
              {
              Loading ? 
              <div className='animate-pulse flex flex-col gap-3'>
                <div className='bg-slate-300 w-[200px] h-[30px] rounded-md'></div> 
                <div className='bg-slate-300 w-[90px] h-[30px] rounded-md'></div> 
                <div className='bg-slate-300 w-[100px] h-[30px] rounded-md'></div>
                <div className='flex flex-row gap-2'>
                  <div className='bg-slate-300 w-[80px] h-[40px] rounded-md'></div> 
                  <div className='bg-slate-300 w-[120px] h-[40px] rounded-md'></div> 
                </div>
                <div className='bg-slate-300 w-[300px] h-[30px] rounded-md'></div>
                <div className='flex flex-row gap-2'>
                  <div className='bg-slate-300 w-[100px] h-[40px] rounded-md'></div> 
                  <div className='bg-slate-300 w-[120px] h-[40px] rounded-md'></div> 
                </div> 
              </div>
                : 
              <div className='flex flex-col gap-5'>
                  <p className='text-[28px] font-bold'>{Productdetail?.title}</p>
                  <p className=' opacity-50 line-through'>ราคาปกติ ${(Productdetail?.price)}</p>
                  <div className='flex flex-row gap-2 items-center'>
                    <p className='text-[20px] bg-[#ff0000]  p-1 rounded-[0.4375rem] text-white font-bold p-2'> -{Productdetail?.discountPercentage}% ส่วนลด</p>
                    <p className='text-[24px] font-bold'>$ {((Productdetail?.price) - (Productdetail?.price * (Productdetail?.discountPercentage/100))).toFixed(2)}</p>
                  </div>
                  <div className='flex gap-3 items-center'>
                <p className='opacity-50'>จำนวน</p>
                <div className='flex items-center gap-5 border border-neutral-400 rounded-md mx-2 px-2'>
                    <div className='cursor-pointer hover:bg-slate-300 ease duration-150 rounded-full' onClick={DecreaseProduct}>
                      <FiMinus ClassName='cursor-pointer'  />
                    </div>
                    <p className='text-[14px]'>{Count}</p>
                    <div className='cursor-pointer hover:bg-slate-300 ease duration-150 rounded-full' onClick={IncreaseProduct}>
                      <FiPlus />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div onClick={setHeart} className='cursor-pointer text-[30px] p-1 hover:bg-slate-200 rounded-full'>
                    {Like ? <AiFillHeart style={{color: "red"}}/> : <AiOutlineHeart/>}
                  </div>
                  <p className='text-[#747474]'>ถูกใจ</p>
                </div>
                </div>
                <div className='flex flex-row gap-2'>
                  <div className='ease duration-150 bg-[#FF5C00] cursor-pointer hover:bg-[#DD5100] text-white font-regular p-2 rounded-xl text-[20px] px-10'>ซื้อเลย</div>
                  <div className='ease duration-150 bg-[#2F82FFB0] cursor-pointer hover:bg-[#2267D0B0] text-white font-regular p-2 rounded-xl px-10 text-[20px] flex items-center gap-2'>
                    <AiOutlineShoppingCart/>
                    <div className=''>ใส่รถเข็น</div>
                  </div>
                </div>
                </div>
              }
            </div>
            </div>
  

{Loading ? 
  <div className='flex flex-col gap-3'>
        <div className=' animate-pulse flex flex-col gap-3 m-5 p-5 text-black text-[20px] bg-[#F8F8F8] w-[97%]'>
          <p className='bg-slate-400 w-[500px] h-[20px]'></p>
            <div className='animate-pulse gap-3 text-[18px] flex flex-col'>
              <p className='bg-slate-400 w-[600px] h-[20px]'></p>
              <p className='bg-slate-400 w-[200px] h-[20px] '></p>
            </div>
        </div>
  </div>
:
          <div className='m-5 p-5 text-black text-[20px] bg-[#F8F8F8] w-[97%]'>
            <p className='font-bold'>รายละเอียดสินค้า</p>
              <div className='text-[18px] flex flex-col'>
                <p>{Productdetail?.description}</p>
                <p>แบรนด์สินค้า: {Productdetail?.brand}</p>
              </div>
          </div>
}

      </div>
    </div>
  )
}

export default Productdetail



