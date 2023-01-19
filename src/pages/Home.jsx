import React from 'react'
// import { Data } from '../components/Data';
import Form from '../components/Form';
import Nav from '../components/Nav'
import Table from '../components/Table';


export const Home = () => {
  return (
    <div>
    <Nav/>
    <Form/>
    {/* <Data/> */}
    <Table/>
    </div>
  )
}

export default Home;