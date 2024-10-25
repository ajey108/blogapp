const { NextResponse } = require("next/server");
import { ConnectDB } from "@/lib/config/db";
import blogModel from '@/lib/models/blogModel';
import {writeFile} from 'fs/promises'
import { title } from "process";
const LoadDB = async()=>{
    await ConnectDB();
    console.log("DB Connected");
}


LoadDB();


//api to get all blogs
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get('id');
    if(blogId){
        const blog = await blogModel.findById(blogId);
        return NextResponse.json({blog});
    } else{
        const blogs = await blogModel.find({});
        return NextResponse.json({blogs});
    }

   
}



//api for uploading blog

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        desc: `${formData.get('desc')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        authorImg: `${formData.get('authorImg')}`,
        image: `${imgUrl}`,
    }

   await blogModel.create(blogData);
    console.log('Blog saved');
    return NextResponse.json({success: true,msg:'Blog added'});
}