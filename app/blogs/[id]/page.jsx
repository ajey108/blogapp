'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Footer from '@/Components/Footer';
import { FaBlog } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';


const page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchBlogData = async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: {
          id: params.id
        }
      });
      const data = response.data;
      console.log('Fetched data:', data);
      data.authorImg = '/authorImg.jpg';
      setData(data);
    } catch (error) {
      setError('Failed to fetch blog data.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBlogData();
  }, [params.id]);


  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div className='bg-gray-300 py-10 px-5 md:px-12 lg:px-28 h-full'>
      <Link href={'/'}>
        <FaBlog className='text-5xl sm:text-7xl mb-5' />
      </Link>
      {data && (
        <div className='max-w-3xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-5'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>{data.blog?.title || 'No Title Available'}</h1>
          <Image
            src={data.blog?.image || ''}
            alt="Blog Image"
            width={600}
            height={400}
            className='w-full h-auto rounded-lg mb-4 object-cover'
          />
          <h2 className='text-lg font-semibold text-gray-700 mb-2'>Content:</h2>
          <p className='text-gray-600 mb-4'>{data.blog?.desc || 'No Description Available'}</p>
          <div className='flex items-center justify-between border-t border-gray-300 pt-4'>
            <span className='text-sm text-gray-500'>{data.blog?.category || 'No Category'}</span>
            <span className='text-sm text-gray-500'>{data.blog?.author || 'Unknown Author'}</span>
          </div>
          <div className='mt-4 flex justify-center'>
            <Image
              src={data?.authorImg || ''}
              alt="Author Image"
              width={100} // Adjust to a smaller size, e.g., 100x100 for a profile look
              height={100}
              className="rounded-full border border-gray-300 object-cover"
            />
          </div>

          <div className='flex gap-4 justify-center mt-4 items-center mb-9'>
            <h3>Share on Social Media</h3>
            <FaFacebook />
            <FaWhatsapp />
            <FaTwitter />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};



export default page;