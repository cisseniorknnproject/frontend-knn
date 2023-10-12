import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default function UserDataForm() {
    const tdStyle = 'border border-slate-200 text-justify p-5';
    const [CurrentRadio, SetRadio] = useState({ current: '' });
    const { data: session, status } = useSession();
    const sexRadio = [
        { id: 1, sex: 'male' },
        { id: 2, sex: 'female' },
        { id: 3, sex: 'other' }]
    const checkradioOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        SetRadio({ ['current']: value })
    }
    return (
        <div className='border flex flex-col'>
            <table className='border-collapse '>
                <tbody>
                    <tr>
                        <td className={`${tdStyle}`}>ชื่อผู้ใช้</td>
                        <td className={`${tdStyle}`}>011111</td>
                    </tr>
                    <tr>
                        <td className={`${tdStyle}`}>ชื่อ</td>
                        <td className={`${tdStyle}`}>{session?.user?.name}</td>
                    </tr>
                    <tr>
                        <td className={`${tdStyle}`}>อีเมล</td>
                        <td className={`${tdStyle}`}>{session?.user?.email}</td>
                    </tr>
                    <tr>
                        <td className={`${tdStyle}`}>เบอร์โทรศัพท์</td>
                        <td className={`${tdStyle}`}>09999999</td>
                    </tr>
                    <tr>
                        <td className={`${tdStyle}`}>เพศ</td>
                        <td className={`${tdStyle} flex justify-center gap-3`}>
                            {sexRadio.map((val, idx) => {
                                return <div key={idx} className='flex items-center gap-1'><input value={val.sex} onChange={(e) => {checkradioOption(e)}} checked={(CurrentRadio.current == val.sex)} type="radio" name={val.sex} id="" /><p>{val.sex}</p></div>;
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td className={`${tdStyle}`}>เดือน/ปี/เกิด</td>
                        <td className={`${tdStyle} text-[16px]`}><input type="date" name="" id="" /></td>
                    </tr>
                    <tr>
                        <td className='p-5 w-fit max-w-full text-center' colSpan={2}>
                            <div className='w-full flex justify-center'>
                                <div className='bg-[#FF5C00] text-white px-5 py-1'>Save</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

