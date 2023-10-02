"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
function LoginForm() {
  const [ShowPassword, SetShowPassword] = useState<boolean>(true);
  const [formData, setFormData] = useState({email:"", password: ""}); 
  const handlerForm = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    const value = e.target.value
    setFormData({...formData, [e.target.name]: value});

  }
const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log(JSON.stringify(formData));
}
  return (
    <>
      <dialog id="modal_formLogin" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box h-full">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-transparent text-2xl font-light rounded-full border-none ">X</button>
            </form>
          </div>
          <div className=" flex flex-col w-full h-4/5 justify-start gap-6 align-middle items-center ">
            <div className="flex flex-col items-center gap-5">
              <p className="font-bold text-2xl text-black">NPP.</p>
              <p className="font-black text-3xl text-black">Sign in to your account</p>
            </div>

            <form  className='max-w-full w-10/12 h-full flex flex-col gap-5'>
              <div className='max-w-full flex flex-col w-full gap-2'>
                <label htmlFor="email" className='font-semibold block leading-3'>Email address</label>
                <input onChange={(e) => handlerForm(e)} placeholder='Email' type="email" name="email" className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
              </div>
              <div className='max-w-full flex flex-col w-full gap-2'>
                <label htmlFor="password" className='font-semibold block leading-3'>Password</label>
                <div className='relative'>
                  <input autoComplete='on' onChange={(e) => handlerForm(e)} placeholder='Password' type={ShowPassword ? 'password' : 'text'} name="password" className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                  <div onClick={() => { SetShowPassword(!ShowPassword) }} className='absolute flex items-center inset-y-0 right-0 pr-2 cursor-pointer'>
                  {ShowPassword ? <FiEyeOff/> : <FiEye/>}
                  </div>
                </div>
              </div>
              <button onClick={formSubmit} className='ease-in duration-100 hover:bg-blue-500 w-full bg-blue-700 rounded-md py-2 text-white font-bold inset-2'>Sign in</button>
              <p className='w-full text-center font-bold text-gray-600 h-auto'>Not a member? <Link href={''} className=' text-blue-700 indent-5 underline underline-offset-2'>Sign up</Link></p>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default LoginForm