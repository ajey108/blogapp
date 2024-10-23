'use client'

import axios from 'axios';
import { useState } from 'react';
import React from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { toast } from 'react-toastify';

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    desc: '',
    category: 'Technology',
    author: 'Alexander Smith',
    authorImg: 'https://thispersondoesnotexist.com/',
  })

  //change handler 
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  }

  //submit form 
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);

    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({ title: '', desc: '', category: 'Technology', author: 'Alexander Smith', authorImg: 'https://thispersondoesnotexist.com/' });
    } else {
      toast.error("Error");
    }
   
  }
  return (
    <>

      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor="image">
          {!image ? (
            <MdOutlineCloudUpload className='text-3xl bg-gray-500 border cursor-pointer border-black' />
          ) : (
            <img src={URL.createObjectURL(image)} alt="Thumbnail Preview" className="w-24 h-24 object-cover" />
          )}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />

        </label>
        <p className='text-xl mt-4'>Blog Title</p>
        <input onChange={onChangeHandler} value={data.title} name='title' className='w-full cursor-pointer sm:w-[500px] mt-4 px-4 py-3 border border-black' type="text" placeholder='Enter blog title' required />

        <p className='text-xl mt-4'>Blog Description</p>
        <textarea name='desc' onChange={onChangeHandler} value={data.desc} className='w-full cursor-pointer sm:w-[500px] mt-4 px-4 py-3 border border-black' type="text" placeholder='Enter blog description' rows={6} required />
        <p className='text-xl mt-4'>Blog Category</p>
        <select onChange={onChangeHandler} value={data.category} name="category" className='w-40 mt-4 px-4 py-3 border border-black text-gray-500'>

          <option value="Technology">Technology</option>
          <option value="Lifestyle">LifeStyle</option>
          <option value="Travel">Travel</option>

        </select>
        <br />
        <button type='submit' className='flex items-center gap-2 font-mono py-1 px-3 sm:px-6 border border-solid border-gray-600 hover:bg-gray-900 hover:text-white rounded-md mt-5'>Submit </button>
      </form>



    </>
  )
}

export default page