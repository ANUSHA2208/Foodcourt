import React from 'react'
import Dashboard from '../components/Dashboard';
import Data from '../components/Data';
import Nav from '../components/Nav'

export const Vdashboard = () => {
  return (
    <div>
        <Nav/>
        <Dashboard/>
        <Data/>
    </div>
  )
}

export default Vdashboard;