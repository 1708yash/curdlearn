import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav className='flex justify-between items-center bg-slate-800 px py-3'>
    <div className='text-white'><h2 className='p-2'>CRUD testing</h2> </div>
    <Link className='bg-white p-2 font-bold mr-2' href={'/addTopic'}>Add Topic</Link>
   </nav>
  )
}
