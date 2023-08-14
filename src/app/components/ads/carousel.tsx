"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

function CarouselAds() {
    SwiperCore.use([Autoplay])
    const items = [
        {id:1, img:'/dummy.png'},
        {id:2, img:'/dummy.png'},
        {id:3, img:'/dummy.png'},
    ];
    return (
        <div className=''>

        <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{delay:2000}}
      >
        {items.map((val, index)=>(
            <div key={val.id} className='bg-black '>
                <SwiperSlide><Image key={index} src={val.img} width={100} height={100} alt='...'/></SwiperSlide>
            </div>
        ))}
      
    </Swiper>
        </div>
    )
  }

export default CarouselAds