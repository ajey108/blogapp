import React from 'react'
import { FaBlog } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <div className='py-2 px-5 md:px-12 lg:px-28'>
        
        <div className="flex justify-between items-center">
            <FaBlog className='text-3xl '/>
            <button className='flex items-center gap-2 font-mono py-1 px-3 sm:px-6 border border-solid border-gray-600 hover:bg-gray-900 hover:text-white rounded-md'>Get Started 
                    <IoIosArrowRoundForward />
                  </button>
        </div>
        <div className="text-center my-8 ">
            <h1  className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quos fugiat nobis!</p>

            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-border-black' action="">
                <input type="email" placeholder='Enter Your email here  ' className='pl-4 outline-none w-[75%] border border-solid border-black' />
                <button type='submit' className='bg-black text-white py-2 px-4 rounded-md'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header;