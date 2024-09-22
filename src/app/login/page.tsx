import React from 'react'
import signupImage from '../../image/shoppi.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
export default function page() {
  return (
    <div>
       <div className="hero">
  <div className="hero-content w-full items-center flex lg:flex-row-reverse">
  <div>
  <Image className='w-full' src={signupImage}  alt="" />
  </div>
    <div className="card bg-[#F5F5DC] w-2/5 h-full shrink-0 ">
    <h2 className='text-center text-xl font-bold mt-6'>Login Now</h2>
      <form className="card-body mb-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-5">
          <button className="btn text-white bg-[#FF7043]">Login</button>
        </div>
        <p className='text-center font-bold'>Don’t have an account? <Link href={'/sign-up'}><span className='text-blue-500'>Sign up now</span></Link></p>
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
