import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
export default function RemoveBtn() {
  return (
    <div>
      <button className='text-red-600'>
        <RiDeleteBin6Line size={24}/>
      </button>
    </div>
  );
}
