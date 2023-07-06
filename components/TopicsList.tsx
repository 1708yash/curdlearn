import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {BiEditAlt} from 'react-icons/bi'
const getTopics=async()=>{
  try{
    const res=await fetch('http://localhost:3000/API/topics/',{
      cache:'no-store',
    });
    if(!res.ok){
      throw new Error("Fetching was not possible due to missing data");

    }
    return res.json();
  }catch(err){
    console.log(err);
  }
}
export default async function TopicsList() {
  const {topics}= await getTopics();
  return (
    <>
      {topics.map((t: any) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div key={t._id}>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div>
            <div className="flex gap-2">
              <RemoveBtn />
              <Link href={`/editTopic/${t._id}`}>
                <BiEditAlt size={24} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
 