import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ title, desc, image, category, id, authorImg }) => {
  //console.log("Author Image:", authorImg);
  // console.log("Blog Image:", image);
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow=[-7px_7px_0_0_#000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="Blog Image"
          width={330}
          height={200}
          className="w-full h-[200px] object-cover border-b border-black"
          onError={(e) => {
            e.target.src = "/default-blog.png";
          }}
        />
      </Link>

      {/* Author Info */}
      <div className="flex items-center gap-3 px-5 py-4">
        <Image
          src={authorImg}
          alt="Author Image"
          width={40}
          height={40}
          className="rounded-full object-cover"
          onError={(e) => {
            e.target.src = "/author.webp";
          }}
        />
        <p className="text-gray-900 font-medium">JohnDoe</p>
      </div>

      <p className="text-center py-2 font-semibold text-sm bg-black text-white tracking-tighter">
        {category}
      </p>

      <Link href={`/blogs/${id}`} className="block p-5">
        <h5 className="mb-2 text-lg font-medium text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 tracking-tighter text-sm">
          {desc}
        </p>
        <div>
          Read More <IoIosArrowRoundForward className="inline w-7" />
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
