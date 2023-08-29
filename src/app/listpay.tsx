"use client"
import Link from 'next/link';
import React from 'react'
import ListItem from './components/ListItem'
import Carousel from './components/carousel';
import Image from 'next/image';
import Recommendation from './components/recommen/page';
import Products from './products';


function listpay() {
    const listStyle = [
        {name: 'Keyboard' },
        {name: 'Keyboard 60%' },
        {name: 'Keyboard 65%' },
        {name: 'Keyboard 75%' },
        {name: 'Keyboard 80%' },
        {name: 'Keyboard 96%' },
        {name: 'Keyboard 100%' },
    ];
    const slide = [
        { url: 'https://images.unsplash.com/photo-1692046904551-5b21bea8b584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'},
        { url: 'https://images.unsplash.com/photo-1692387673579-1f30e61d04ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'},
        { url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'},
        { url: 'https://images.unsplash.com/photo-1646021780609-9c908307edc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
        { url: 'https://plus.unsplash.com/premium_photo-1682801939761-4a5b37c9370b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    ]
  return (
      <div className='w-full max-w-full max-h-full flex flex-col gap-5'>
        <ListItem Ar={listStyle}/>
        <div className='ads_container max-w-full w-full gap-5 mt-5'>
            <div className='max-w-full w-full h-full '>
                <Carousel slide={slide}/>
            </div>
            <div className='max-w-full max-h-[400px] h-full w-full bg-white rounded-xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <Link href={'/'}>
                <Image className='object-cover rounded-xl max-w-full w-full max-h-full h-full' objectFit='cover' src="/test_prop.png" width={1000} height={1000} alt="" />
            </Link>
            </div>
        </div>
        <div className='max-w-[120%] w-[100%] bg-[#2F82FF] h-[300px] rounded-xl flex'>
            <Recommendation/>
        </div>

        <div className='flex flex-col w-full'>
            <p className='text-[28px] text-black w-full bg-[#F8F8F8] p-4'>รายการสินค้า</p>
            <Products />
        </div>
    </div>
  )
}

export default listpay
