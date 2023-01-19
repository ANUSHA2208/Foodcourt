import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Form = () => {
  return (
    <div className='xl:max-w-1xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full py-4'>
        <div className='h-auto w-full box'>
        <h1 class="flex px-5 py-4 font-semibold text-3xl">Add Vendor</h1>

<div class="grid gap-4 grid-cols-3">
  <div>
  <form class="rounded lg:px-8 lg:pb-8 lg:mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Name"/>
    </div>
    </form>
  </div>
  <div>
  <form class="rounded lg:px-8 lg:pb-8 lg:mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Shop Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shopname" type="text" placeholder="Enter Shop Name"/>
    </div>
    </form>
  </div>
  <div>
  <form class="rounded lg:px-8 lg:pb-8 lg:mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="formFile" type="file" />
    </div>
    </form>
  </div>
  <div>
  <form class="rounded lg:px-8 lg:pb-8 lg:mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="email" placeholder="email"/>
    </div>
    </form>
  </div>
  <div>
  <form class="rounded lg:px-8 lg:pb-8 lg:mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Phone No.
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="num" type="text" placeholder="+91 ***** *****"/>
    </div>
    </form>
  </div>
</div>
<div>
  <form class="rounded lg:px-8 lg:pb-8 lg:mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Bio
      </label>
    <ReactQuill theme="snow" />
    </div>
    </form>
  </div>
  <div class="flex px-5 pb-4">
  <button type="button" class="inline-block px-6 py-2.5 bg-[#C4E538] font-2xl font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
  </div>
</div>
    </div>
  )
}

export default Form;
