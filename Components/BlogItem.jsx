import React from 'react'
import { blogData } from '@/Assests/blogData'
import { IoIosArrowRoundForward } from "react-icons/io";

const BlogItem = ({title,desc,image,category}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow=[-7px_7px_0_0_#000]">
        <img src={image} alt="" width={200} height={200} className='w-full  object-cover border border-black border-bottom'/>
        <p className='text-center py-4 font-semibold text-sm bg-black text-white tracking-tighter '>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-large font-medium text-gray-900'>{title}</h5>
            <p className='mb-3 font-normal text-gray-700 tracking-tighter text-sm '>{desc}</p>
            <div>
                ReadMore <IoIosArrowRoundForward className='inline w-7' />
            </div>
        </div>
    </div>
  )
}

export default BlogItem