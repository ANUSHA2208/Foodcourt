import React from 'react'
import load from '../assets/empty.svg';
import { Link } from 'react-router-dom'

export const Data = () => {
  return (
    <div className='w-9/12 h-auto m-auto justify-center items-center '>
       <img src={load} className="mt-44 m-auto justify-center items-center"/>
       <div className='text-center mt-6'>No menu</div>
       <div className="mt-6 flex justify-center items-center">
       <Link to="/addmenu">
  <button type="button" class="inline-block px-6 py-2.5 bg-[#C4E538] font-2xl font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Add Menu</button>
  </Link>
  </div>
    </div>
  )
}

export default Data;