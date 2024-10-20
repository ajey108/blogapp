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



export async function GET(request) {
   console.log('Blog GET Hit');
   return NextResponse.json({msg: 'api working'});
}


//custom function

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