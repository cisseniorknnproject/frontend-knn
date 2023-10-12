"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';


function RegisterForm() {
  const [ShowPassword, SetShowPassword] = useState<boolean>(true);
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [regisValid, setRegisValid] = useState<boolean>(true);
  const [FormaValid, setFormaValid] = useState<boolean>(true);
  const [CurrentRadio, SetRadio] = useState({ current: '' });
  const [formData, setFormData] = useState({ username: '', password: '', email: '', fullname: '', gender: '' });

  const handlerForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({ ...formData, [e.target.name]: value });

  }


  const checkradioOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    SetRadio({ ['current']: value })
    setFormData({ ...formData, ['gender']: value });
  }
  const regisUser = async () => {
    const response = await fetch('api/register', {
      method: 'POST',
      headers: {
        'CONTENT_TYPE': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const res = await response.json();
    console.log(res);
  }
  const formSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setPasswordValid(false)
    } else {
      setPasswordValid(true)
      if ((formData.email && formData.password && formData.username && formData.fullname) == '') {
        setFormaValid(false)
      } else {
        setFormaValid(true)
        regisUser()
      }
    }

  }
  return (
    <>
      <dialog id="register_form" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box h-full">

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-transparent text-2xl font-light rounded-full border-none ">X</button>
            </form>
          </div>
          <div className=" flex flex-col w-full h-4/5 justify-start gap-7 align-middle items-center">
            <div className="flex flex-col items-center gap-5">
              <p className="font-bold text-5xl text-black">NPP.</p>
              <p className="font-semibold text-lg text-black">เพื่อนคู่นักช็อป</p>
              <p className="font-medium text-[#00001237] ">Best Hobby Buddy</p>
            </div>

            <form method='post' className='relative max-w-full w-10/12 h-full flex flex-col gap-8'>

              {FormaValid ?
                ''
                :
                <p className='absolute -top-7 text-sm text-[#f00] left-0'>** please fill all fields</p>
              }
              <div className='max-w-full flex w-full items-center'>
                <label htmlFor="name" className='font-normal block leading-3 w-2/5'>ชื่อผู้ใช้</label>
                <input required onChange={(e) => handlerForm(e)} placeholder='ชื่อผู้ใช้' type="text" name="username" className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
              </div>

              <div className='relative max-w-full flex w-full items-center'>
                <label htmlFor="password" className='font-normal block leading-3 w-2/5'>รหัสผ่าน</label>
                <input required autoComplete='true' onChange={(e) => { handlerForm(e) }} placeholder='password' type={ShowPassword ? 'password' : 'text'} name="password" className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                {
                  passwordValid ? '' : <p className='absolute right-0 -bottom-6 text-[#f00] text-sm'>**password should be minimum 6 characters</p>
                }
                <div onClick={() => { SetShowPassword(!ShowPassword) }} className='absolute flex items-center inset-y-0 right-0 pr-2 cursor-pointer'>
                  {ShowPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>

              <div className='max-w-full flex w-full items-center'>
                <label htmlFor="email" className='font-normal block leading-3 w-2/5'>อีเมล</label>
                <input required onChange={(e) => handlerForm(e)} placeholder='Email' type="email" name="email" className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
              </div>

              <div className='max-w-full flex w-full items-center'>
                <label htmlFor="fullname" className='font-normal block leading-3 w-2/5'>ชื่อ</label>
                <input required onChange={(e) => handlerForm(e)} placeholder='ชื่อ - นามสกุล' type="text" name="fullname" className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
              </div>

              <div className='max-w-full flex w-full items-center'>
                <label htmlFor="gender" className='font-normal block leading-3 w-2/5'>เพศ</label>
                <input onChange={(e) => { checkradioOption(e) }} checked={(CurrentRadio.current == "male")} type="radio" name="male" value='male' className='block w-2/3 ml-2 pl-2 rounded-md' /><p>ชาย</p>
                <input onChange={(e) => { checkradioOption(e) }} checked={(CurrentRadio.current == "female")} type="radio" name="female" value='female' className='block w-2/3 ml-2 pl-2 rounded-md' /><p>หญิง</p>
                <input onChange={(e) => { checkradioOption(e) }} checked={(CurrentRadio.current == "others")} type="radio" name="others" value='others' className='block w-2/3 ml-2 pl-2 rounded-md' /><p>อื่นๆ</p>
              </div>



              <button type='submit' onClick={formSubmit}
                className='
              self-center
              disabled:opacity-75 
              disabled:bg-blue-700 
              ease-in duration-100 
              hover:bg-[#ff5e00c8] 
              w-5/12 
              bg-[#FF5C00] 
              rounded-md py-2 
              text-white 
              font-bold 
              inset-2'>Sign up</button>



            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default RegisterForm