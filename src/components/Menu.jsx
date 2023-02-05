import React from 'react'
import Dashboard from '../components/Dashboard'
import Menuitems from './Menuitems';

export const Menu = () => {
  return (
    <div>
    <Dashboard/>
    <div className='w-9/12 h-auto bg-black rounded-lg m-auto justify-center items-center mt-32'>
      <Menuitems/>
      <Menuitems/>
    </div>
    </div>
  )
}


export default Menu;