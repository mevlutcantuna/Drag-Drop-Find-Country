import React from 'react'

const Sidebar = ({ dragStart, onDrop, allowDrop }) => {

  return (
    <div className='w-80 border-2 border-solid border-purple-800 p-8 h-full bg-purple-300 mr-20' onDrop={onDrop} onDragOver={allowDrop} >
      <ul>
        <li className='flex flex-col'>
          <span draggable={true} onDragStart={dragStart} id={"dragtarget-1"} className='bg-purple-600 p-1 my-4 text-white text-center border-solid border-2 border-purple-900 cursor-pointer'>Africa</span>
          <span draggable={true} onDragStart={dragStart} id={"dragtarget-2"} className='bg-purple-600 p-1 my-4 text-white text-center border-solid border-2 border-purple-900 v'>Americas</span>
          <span draggable={true} onDragStart={dragStart} id={"dragtarget-3"} className='bg-purple-600 p-1 my-4 text-white text-center border-solid border-2 border-purple-900 cursor-pointer'>Asia </span>
          <span draggable={true} onDragStart={dragStart} id={"dragtarget-4"} className='bg-purple-600 p-1 my-4 text-white text-center border-solid border-2 border-purple-900 cursor-pointer'>Europe</span>
          <span draggable={true} onDragStart={dragStart} id={"dragtarget-5"} className='bg-purple-600 p-1 my-4 text-white text-center border-solid border-2 border-purple-900 cursor-pointer'>Oceania</span>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar
