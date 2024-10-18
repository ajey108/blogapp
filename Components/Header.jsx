import React from 'react'
import { FaBlog } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <div className='py-2 px-5 md:px-12 lg:px-28'>
        
        <div className="flex justify-between items-center">
            <FaBlog className='text-3xl '/>
            <button className='flex items-center gap-2 font-mono py-1 px-3 sm:px-6 border border-solid border-gray-600'>Get Started 
                    <IoIosArrowRoundForward />
                  </button>
        </div>
    </div>
  )
}

export default Header;