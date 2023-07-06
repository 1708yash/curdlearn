import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request: { json: () => PromiseLike<{ title: any; description: any; }> | { title: any; description: any; }; }){
    const {title,description}=await request.json();
    await connectMongoDb();
    await Topic.create({title,description});
    return NextResponse.json({message:"Topic created successfully"},{status:201});
}

export async function GET(){
    await connectMongoDb();
    const topics=await Topic.find({}); 
return NextResponse.json({topics});
}
export async function DELETE(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }){
    const id=request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted"},{status:200});
}