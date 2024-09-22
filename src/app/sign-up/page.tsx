'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import signupImage from '../../image/shoppi.jpg'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import axios from 'axios'

export default function signup() {
  const [userData,setuserData]=useState({
    name:'',
    email:'',
    password:''
  })

  const handileClickSignups= async(event:React.FormEvent<HTMLFormElement>)=>{

event.preventDefault()


const datas= await axios.post('/api/sign-up',userData)
console.log(datas.data)
  }
  return (
    <div>
      <div className="hero">
  <div className="hero-content w-full items-center flex lg:flex-row-reverse">
  <div>
  <Image className='w-full' src={signupImage}  alt="" />
  </div>
    <div className="card bg-[#F5F5DC] w-2/5 h-full shrink-0 ">
    <h2 className='text-center text-xl font-bold mt-6'>Registration Now</h2>
      <form onSubmit={handileClickSignups} className="card-body mb-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text"  onChange={(e)=>setuserData({...userData,name:e.target.value})} placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  onChange={(e)=>setuserData({...userData,email:e.target.value})} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" onChange={(e)=>setuserData({...userData,password:e.target.value})} placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-5">
          <button type='submit' className="btn text-white bg-[#FF7043]">Registration</button>
        </div>
        <p className='text-center font-bold'>Already have an account? <Link href={'/login'}> <span className='text-blue-500'>Log in here</span></Link></p>

      </form>
      <div className='text-center grid justify-center mb-4 '>
      <FcGoogle className='text-4xl rounded-full' />
      </div>
    </div>

  </div>
</div>
    </div>
  )
}
