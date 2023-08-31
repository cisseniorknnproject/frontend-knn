import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
type products = {
    readonly id: String,
    title: String,
    price: number,
    image: String
}
function recommendation() {
    const [Products, SetProducts] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);
    
    useEffect(() => {
        SetIsLoading(true)
        fetch('https://dummyjson.com/products', {next : {revalidate:60}})
        .then(response => response.json())
        .then(data => {
            SetProducts(data.products)
        })
        SetIsLoading(false)
    }, [])

        
  return (
    <>
        <div className='text-black max-w-full rounded-xl bg-[#2F82FF] max-h-full w-full flex flex-row flex-nowrap items-center gap-5 '>
            <p className='px-5 text-[34px] text-center w-40 text-white font-bold'>รายการสินค้าแนะนำ</p>
            <div className="flex overflow-x-scroll gap-5 items-center">
                {IsLoading ? 
                <div className=''>Loading ...</div> 
                : 
                Products.map((val,idx) => (
// eslint-disable-next-line react/jsx-key
<Link href={`/product/${val.id}`}>
<div key={idx} className={`m-3 flex justify-center ease duration-200 hover:bg-[#c1c1c1] cursor-pointer w-[200px] bg-white rounded-xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
    <div className='card w-[180px]'>
        {IsLoading ? <p>Loading...</p> : <Image objectFit='contain' className='rounded-xl px-2 mix-blend-multiply mt-1  w-full h-[150px]' src={val.images[0]} width={1000} height={1000} alt='...' />}
        <div className=' text-black p-4'>
            <p className='truncate text-[16px]'>{val.title}</p>
            <div className='flex flex-row items-center gap-2'>
                <p className='font-bold line-through'>$ {val.price}</p>
                <p className='font-bold text-red-500'> Now {(val.price - (val.price * (val.discountPercentage/100)).toFixed(0))}</p>
            </div>
        </div>
    </div>
</div>
</Link>

))}
            </div>
        </div>
    </>
  )
}

export default recommendation