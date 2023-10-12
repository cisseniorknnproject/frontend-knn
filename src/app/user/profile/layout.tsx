import React from 'react'

export default function UserLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='bg-[#2F82FF] max-w-screen p-20 flex flex-col items-center'>
        {children}
    </div>
  )
}
