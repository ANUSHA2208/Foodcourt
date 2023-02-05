import React from 'react';
import {Routes,Route} from "react-router-dom";
import View from '../pages/View';
import  Home from '../pages/Home';
import Signin from '../pages/Signin';
import Reset from '../pages/Reset';
import Changepass from '../pages/Changepass';
import Vdashboard from '../pages/Vdashboard';
import { Drag } from '../pages/Drag';
import Viewmenu from '../pages/Viewmenu';
const Router = () => {
  return (
    <div>
            <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path='/Vendor' element={<View/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path='/reset' element={<Reset/>}/>
            <Route path='/change-password' element={<Changepass/>}/>
            <Route path="/dashboard" element={<Vdashboard/>}/>
            <Route path='/addmenu' element={<Drag/>}/>
            <Route path='/menu' element={<Viewmenu/>}/>
            </Routes>
         
    </div>
  )
}

export default Router