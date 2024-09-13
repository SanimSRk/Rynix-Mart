import Link from 'next/link'
import React from 'react'
import { CiDeliveryTruck, CiShop, CiViewList } from 'react-icons/ci'
import { FaCartPlus, FaRegUser } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineStoreMallDirectory } from 'react-icons/md'
import { RiHome3Line } from 'react-icons/ri'
const Naver = () => {
  return (
    <div className='bg-[#F5F5DC] h-32 text-[#2F4F4F] fixed  w-full shadow-lg z-10'>
      <div className="navbar flex items-center justify-between max-w-screen-xl mx-auto">
  <div className="">
    <a className="btn btn-ghost text-xl"> Rynix Mart</a>
  </div>
  <div>
  <div className=" hidden lg:flex">
      <input type="text" placeholder="Search" className="input  rounded-r-none lg:w-[500px] input-bordered md:w-auto" />
      <button className='bg-[#003366] btn text-white  rounded-l-none'>Search</button>
    </div>
  </div>
  <div className="flex-none gap-4">
    <div>

    <FaCartPlus className='text-3xl' />
    </div>
    <div>
    <button className='btn-ghost btn font-bold'>
    <FaRegUser className='text-3xl ' />
        Sign in
    </button>
    </div>
    <div className="dropdown dropdown-end">
  
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<hr className='bg-white text-white' />
      <div className="navbar flex justify-between max-w-screen-xl mx-auto">
 

  <div className=" lg:hidden flex w-full">
      <input type="text" placeholder="Search" className="input  rounded-r-none w-full input-bordered " />
      <button className='bg-[#003366] btn text-white  rounded-l-none'>Search</button>
    </div>
    <ul className='hidden lg:flex gap-8 font-bold items-center'>
<Link href={'/'}><li className='flex items-center gap-1'><RiHome3Line className='text-2xl' /> Home</li></Link>
<li  className='flex items-center gap-1'> <CiShop className='text-2xl' />
Shops
</li>
<li  className='flex items-center gap-1'><CiViewList className='text-2xl' /> Categories</li>
<li  className='flex items-center gap-1'>
<IoCartOutline className='text-2xl' />   Orders
</li>
<li  className='flex items-center gap-1'>
<MdOutlineStoreMallDirectory className='text-2xl' /> My Store
</li>
<li  className='flex items-center gap-1'> <CiDeliveryTruck className='text-2xl' />
Devlivery Address
</li>

</ul>
</div>
    </div>
  )
}

export default Naver
