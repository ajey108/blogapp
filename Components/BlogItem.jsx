import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ title, desc, image, category, id, authorImg }) => {
  console.log("Author Image:", authorImg);
  console.log("Blog Image:", image);
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow=[-7px_7px_0_0_#000]">
      <Link href={`/blogs/${id}`} className="flex items-center gap-2 p-5">
        <Image
          src={image}
          alt="Blog Image"
          width={200}
          height={200}
          className="w-full object-cover border border-black border-bottom"
          onError={(e) => {
            e.target.src = "/default-blog.png";
          }} // Fallback for blog image
        />

        <Image
          src={authorImg}
          alt="Author Image"
          width={50}
          height={50}
          className="rounded-full"
          onError={(e) => {
            e.target.src = "/default-author.png";
          }} // Fallback for author image
        />
        <p className="text-gray-900 font-medium">Author</p>
      </Link>
      <p className="text-center py-4 font-semibold text-sm bg-black text-white tracking-tighter ">
        {category}
      </p>
      <Link href={`/blogs/${id}`} className="p-5">
        <h5 className="mb-2 text-large font-medium text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 tracking-tighter text-sm ">
          {desc}
        </p>
        <div>
          ReadMore <IoIosArrowRoundForward className="inline w-7" />
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
