import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {BiEditAlt} from 'react-icons/bi'
export default function TopicsList() {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>Topic Title</h2>
            <div>Topic Description</div>
        </div>
        <div>
            <div className='flex gap-2'>
                <RemoveBtn/>
                <Link href={'/editTopic/123'}><BiEditAlt size={24}/></Link>
            </div>
        </div>
    </div>
    </>
  )
}
 