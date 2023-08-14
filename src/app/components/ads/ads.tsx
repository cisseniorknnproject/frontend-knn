import React from 'react'
import CarouselAds from './carousel'
function ads() {
  return (
    <div className='min-h-screen w-full mt-[1.31rem]'> 
        <div className='grid grid-cols-2 gap-[1.25rem]'>
            <div className='w-3/4 rounded-[1.875rem] border-[4px] border-[#FF5C00]'>
                < CarouselAds />
            </div>
            <div className='w-1/4 bg-black'>ds</div>
        </div>
    </div>
  )
}

export default ads

