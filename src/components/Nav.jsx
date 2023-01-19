import React from 'react'
import { Icon } from '@iconify/react';

export const Nav = () => {
  return (
    <div className='w-full h-24 bg-black'>
         <div class="flex items-center justify-between xl:max-w-1xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full py-4">
         <div className='w-16 h-16 bg-white'></div>
         <Icon icon="ri:logout-circle-line" color="white" width="32" height="43"/>
      </div>
    </div>
  )
}

export default Nav;