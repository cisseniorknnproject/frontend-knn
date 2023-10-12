"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import UserDataForm from './UserDataForm';
type user = {
    id: string,
    userId: string,
    status: number,
    address: []
}
export default function UserPage() {
    const [Usedata, setData] = useState<user | any>({});


    useEffect(() => {
        async function callData() {
            const response = await fetch('../../api/user', {
                headers: { 'CONTENT_TYPE': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ email: "wongpoomee@gmail.com", username: "UwU" })
            });
            const data = await response.json();
            const User: user = data;
            setData(User)

        };
        callData();
    }, [])
    return (
        <div className='flex flex-col gap-2 max-w-full w-full h-auto'>
            <h1 className='text-[30px] font-bold text-white'>My Profile</h1>

            {/* user profile field */}
            <div className='flex flex-col bg-white w-full items-center py-5 gap-5'>
                <h2 className='text-[16px] bg-slate-200 w-11/12 px-5'>My Information</h2>
                <div className='flex max-w-full w-11/12 justify-between'>
                    <div className='w-6/12'>
                        {/* <Image className='rounded-3xl' style={{width: '200px', height: 'auto', objectFit:'cover'}}  src={session?.user?.image as string} width={200} height={200} alt={`${session?.user?.name}`} priority /> */}
                    </div>
                    <div className='w-full flex-col'>
                        <UserDataForm />
                    </div>
                </div>

                <h2 className='text-[16px] bg-slate-200 w-11/12 px-5'>My Address</h2>
                <div className='flex max-w-full w-11/12 justify-between'>
                    <div className='w-6/12 border p-5 text-end'>
                        ที่อยู่
                    </div>
                    <div className='w-full flex-col gap-2'>
                        {Usedata.address?.map((val, idx) => (
                            <div className='border p-3' key={idx}>
                                <p className=' py-3'>{val}</p>
                                <div className='flex text-[#FF5C00] text-[12px]'>
                                    {
                                    Usedata.status == idx ? 
                                    <div className='border border-[#FF5C00] px-3'>ค่าเริ่มต้น</div> : 
                                    <div className=' opacity-50 border border-[#FF5C00] px-3'>ค่าเริ่มต้น</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

