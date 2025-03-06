"use client";
import BlogTableItem from "@/Components/AdminComponents/BlogTableItem";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  //delete blog

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>

      <div className="relative h-[80vh] max-w-[1500px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 hidden sm:block">
                Author name
              </th>
              <th scope="col" className="py-3 px-6 ">
                Blog title
              </th>
              <th scope="col" className="py-3 px-6 ">
                Blog date
              </th>
              <th scope="col" className="py-3 px-6 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  mongoId={item._id}
                  authorImg={item.authorImg}
                  title={item.title}
                  date={item.date}
                  author={item.author}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
