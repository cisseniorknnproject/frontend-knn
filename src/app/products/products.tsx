import React, { Key, Suspense, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {AiFillStar} from 'react-icons/ai';
type Product = {
    id: Number,
    title: string,
    price: number,
    image: []
} 
function Products() {
    const [Product, SetProduct] = useState<Product | any>([]);
    useEffect(()  => {  
        const fetchStroe = async () => {
            const res = await fetch('https://dummyjson.com/products', {next : {revalidate:60}})
            const repo = await res.json();
            SetProduct(repo.products)
        }
        fetchStroe();
    }, [])

  return (
      <div className='flex flex-row w-full flex-wrap gap-10 px-5 justify-center'>
    {Product.map((val:any, idx:Key)=> {
        const discount:Number = val.price - (val.price * (val.discountPercentage / 100));
        return (
            <Link key={idx} href={`/product/${val.id}`}>
            <div  className='cursor-pointer ease duration-200 hover:bg-[#e1e1e1] hover:scale-[1.05] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_4px_4px_rgba(0,0,100,0.25)] text-black rounded-xl w-[250px] h-[300px] bg-white mt-2 flex flex-col items-center py-2'>
                <Image objectFit='contain' className='mix-blend-multiply rounded-xl w-[230px] h-[200px]' src={val.images[0]} width={1000} height={1000} alt={val.title}/>
                <div className='flex flex-col items-start w-full px-4'>
                    <p className='truncate w-full'>{val.title}</p>
                    <div className='flex flex-row gap-5'>
                        <p className='font-bold line-through opacity-50'>$ {val.price} Dollar</p>
                        <p className='font-bold'>$ {discount.toFixed(0).toString()}</p>
                    </div>
                    <div className='flex items-center text-[14px]'>
                        <AiFillStar/>{val.rating}
                    </div>
                    <p className='opacity-50 text-[14px] truncate'>Brand: {val.brand}</p>
                </div>
            </div>
            </Link>
        )
    })}
    </div>
  )
}

export default Products

