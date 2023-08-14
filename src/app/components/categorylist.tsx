import React from 'react'
import Image from 'next/image';
const items = [
    {id: 0, name: 'Numpad Macro pad', img: '/dummy.png'},
    {id: 1, name: 'mechanical keyboard', img: '/dummy.png'},
    {id: 2, name: 'keycap', img: '/dummy.png'},
    {id: 3, name: '65%', img: '/dummy.png'},
    {id: 4, name: '75%', img: '/dummy.png'},
    {id: 5, name: '80%', img: '/dummy.png'},
    {id: 6, name: '100%', img: '/dummy.png'},
    
];
function categorylist() {
  return (
    <div className='flex gap-5 overflow-hidden overflow-x-scroll'>
        {
        items.map((val, index)=> (
            <div key={val.id} className='min-h-full ease-in duration-100 cursor-pointer bg-[#D9D9D9] rounded-[1.13rem] flex gap-2 uppercase items-center px-[0.56rem] py-[0.51rem] hover:bg-[#8d8d8d] '>
                <Image key={index} src={val.img} width={33} height={33} alt={val.name} />
                <p className='font' key={val.id}>{val.name}</p>
            </div>
        ))
        }
    </div>
  )
}

export default categorylist