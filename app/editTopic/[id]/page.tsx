import React from 'react'

export default function editTopic() {
  return (
    <>
      <form className="flex flex-col gap-3 ">
        <input
          className="border border-slate-300 px-8 py-2"
          type="text"
          placeholder="Edit Topic"
          name="topic"
          id=""
        />
        <input
          className="border border-slate-300 px-8 py-2"
          type="text"
          placeholder="Edit Description"
          name="topicdesc"
          id=""
        />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Edit Topic
        </button>
      </form>
    </>
  );
}
