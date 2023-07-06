import mongoose from "mongoose"
import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb"
import Topic from "@/models/topic"
export async function PUT(request: any,{params}: any){
    const {id}=params;
    const {newtitle:title,description}=request.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id,{title,description});
return NextResponse.json({message:"Topic updated successfully"},{status:203});
}

export async function GET(request: any,{params}: any){
    const {id}=params;  
    await connectMongoDb();
   const topic= await Topic.findOne({_id:id});
   return NextResponse.json(topic,{status:200});
}