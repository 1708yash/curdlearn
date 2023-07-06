"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function AddTopic() {
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
 const router=useRouter();
  const handleSubmit=async(e:any)=>{
e.preventDefault();
if(!title||!description){
  alert("Please add both title and description");
  return;
  }
try{
const res= await fetch('http://localhost:3000/API/topics/',{
method:'POST',
headers:{
  'Content-Type':'application/json',}
,body:JSON.stringify({title,description}),
});
if(res.ok){
  router.push('/');
}else{
  throw new Error("Something went wrong, could not make changes");
}

}catch(err){
  console.log(err);
}
  return (
    console.log("AddTopic"),
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
        <input
          className="border border-slate-300 px-8 py-2"
          type="text"
          placeholder="Add Topic"
          name="topic"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          id=""
        />
        <input
          className="border border-slate-300 px-8 py-2"
          type="text"
          placeholder="Add Description"
          name="topicdesc"
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          id=""
        />
        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Topic</button>
      </form>
    </>
  );
}}
