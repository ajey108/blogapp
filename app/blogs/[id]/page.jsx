'use client';
import React, { useEffect, useState } from 'react';
import { blogData } from '@/Assests/blogData.js';
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Footer from '@/Components/Footer';
import { FaBlog } from "react-icons/fa";
import Link from 'next/link';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    console.log('blogData:', blogData);
    console.log('params.id:', params.id);
    const foundBlog = blogData.find(blog => Number(params.id) === blog.id);
    if (foundBlog) {
      console.log('Found matching blog post:', foundBlog);
      setData(foundBlog);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]); // Re-fetch data when the ID changes

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='bg-gray-300 py-10 px-5 md:px-12 lg:px-28 h-full'>
        <Link href={'/'}> <FaBlog className='text-5xl sm:text-7xl mb-5'/> </Link>
      <div className='max-w-3xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-5'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>{data.title}</h1>
        <Image
          src={data.image}
          alt="Blog Image"
          width={600}
          height={400}
          className='w-full h-auto rounded-lg mb-4 object-cover'
        />
        <div className='flex items-center mb-4'>
          <button className='bg-black text-white py-2 px-4 rounded-md mr-2'>
            Get Started
          </button>
          <IoIosArrowRoundForward className='text-2xl text-gray-600' />
        </div>
        <h2 className='text-lg font-semibold text-gray-700 mb-2'>Content:</h2>
        <p className='text-gray-600 mb-4'>{data.desc}</p>
        <div className='flex items-center justify-between border-t border-gray-300 pt-4'>
          <span className='text-sm text-gray-500'>{data.category}</span>
          <span className='text-sm text-gray-500'>{data.author}</span>
        </div>
        <div className='mt-4'>
          <Image
            src={data.authorImage}
            alt="Author Image"
            width={100}
            height={100}
            className='w-12 h-12 rounded-full border border-gray-300'
          />
        </div>
      </div>
      <div className='flex gap-4 justify-center mt-4 items-center mb-9'>
        <h3>Share on social Media</h3>
        <p><FaFacebook /></p>
        <p><FaWhatsapp /></p>
        <p><FaTwitter /></p>
      </div>
    
      <Footer/>
    </div>
  );
};

export default Page;
