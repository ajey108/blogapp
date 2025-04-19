const { NextResponse } = require("next/server");
import { ConnectDB } from "@/lib/config/db";
import blogModel from "@/lib/models/blogModel";
import { writeFile } from "fs/promises";
import { title } from "process";
const fs = require("fs");
const LoadDB = async () => {
  await ConnectDB();
  console.log("DB Connected");
};

LoadDB();

//api to get all blogs
export async function GET(request) {
  await ConnectDB();
  const blogId = request.nextUrl.searchParams.get("id");
  console.log(blogId);

  try {
    if (blogId) {
      const blog = await blogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json(
          { message: "Blog not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ blog });
    } else {
      const blogs = await blogModel.find({});
      return NextResponse.json({ blogs }); // ✅ Wrap the array inside an object
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

//api for uploading blog

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    desc: `${formData.get("desc")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    authorImg: `${formData.get("authorImg")}`,
    image: `${imgUrl}`,
  };

  await blogModel.create(blogData);
  console.log("Blog saved");
  return NextResponse.json({ success: true, msg: "Game added" });
}

//api for deleting blog

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  console.log(`Deleting blog with ID ${id}`);
  const blog = await blogModel.findById(id);
  fs.unlink(`./public/${blog.image}`, () => {});

  await blogModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Game deleted" });
}
