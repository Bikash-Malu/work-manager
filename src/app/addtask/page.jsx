
'use client';
import React from 'react'
import addtasksvg from '../../assets/addtodo.svg'
import Image from 'next/image';
// export const metadata={
//     title:"addtask-work manager"
//   };
const AddTask = () => {
  console.log('client')
  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className="border col-span-6 col-start-4 border-black-800 p-5 shadow-black-800 shadow-lg mt-4">
          <div className='flex text-center justify-center'>
            <Image src={addtasksvg} height={200} />
          </div>
            <h1 className='text-2xl text-center font-semibold underline'>Add Your Task</h1>
            <form action="">
           <div className="mt-4">
            <label htmlFor="" className='block font-semibold'>Title</label>
            <input type="text" className='w-full p-3 rounded-md bg-gray-200 focus:ring-gray-200-100 border border-gray-200' title='' placeholder='Enter the title'/>
           </div>
           <div className="mt-4">
            <label htmlFor="" className='block font-semibold'>Content</label>
            <textarea rows={6} className='w-full p-3 rounded-md bg-gray-200 focus:ring-gray-800 border-gray-200' title='' style={{resize:'none'}} placeholder='Enter the content'/>
           </div>
           <div className="mt-4">
            <label htmlFor="" className='block font-semibold'>Status</label>
            <select name="" className='w-full p-3 rounded-2xl bg-gray-200 focus:ring-gray-200-100 border border-gray-200' id="">
              <option value="" selected>--Selected Status---</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            </div>
           <div className="mt-4 text-center text-white">
                  <button className='bg-purple-600 py-2 px-3 rounded-md hover:bg-purple-400' type='submit'>Add Todo</button>
                  <button className='bg-red-700 py-2 px-3 rounded-md hover:bg-red-400 mx-2' type='reset'>Clear</button>
            </div>

            </form>
        </div>


    </div>
  )
}

export default AddTask