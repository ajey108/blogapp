import Image from 'next/image'
import React from 'react'
import { FaBlog, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
        <FaBlog className='text-3xl text-white'/>
        <p className='text-white text-xs sm:text-base'>© 2024 . All rights reserved.</p> <span><FaGithub className='text-2xl text-white'/></span>
         <p></p>

    </div>
  )
}

export default Footer