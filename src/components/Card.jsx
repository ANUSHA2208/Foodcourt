import React from 'react'

export const Card = () => {
  return (
    <div>
        <div class="z">
           <h2 class="pt-5 px-10 text-2xl font-semibold">Vendor Name</h2>
           <div className='mt-6 mx-10'>
           <p class="text-lg">Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet,</p>
              </div>
              <div className='px-24 pt-5'>
                <p>+91 123456789</p>
              </div>
              <div  className='px-24 pt-2'>
                <p>otto@gmail.com</p>
              </div>

              <div className='float-right w-44'>
                <div className='w-16 h-16 rounded-full bg-red-100 m-auto flex justify-center items-center'></div>
                <h1 className='text-xl font-bold m-auto flex justify-center items-center'>SHOP NAME</h1>
              </div>
           </div>
    </div>
  )
}

export default Card;