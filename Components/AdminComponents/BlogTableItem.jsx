import Image from "next/image";
import React from "react";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  mongoId,
  deleteBlog,
}) => {
  const BlogDate = new Date(date).toDateString();
  return (
    <tr className="bg-white border-b cursor-pointer">
      <th
        scope="row"
        className="py-4 px-6 gap-3 hidden sm:flex font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={50}
          height={50}
          src={authorImg ? authorImg : "/authorImg.jpg"}
          alt="authorImage"
        />
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-6  py-4">{title ? title : "no title"}</td>
      <td className="px-6  py-4">{BlogDate ? BlogDate : "no date"}</td>

      <td onClick={() => deleteBlog(mongoId)} className="px-6  py-4">
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
