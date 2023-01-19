import React from 'react'
import Card from './Card'
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'


export const Vendors = () => {
  return (
    <div className='xl:max-w-1xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full py-4'>
        <div className='h-auto w-full box'></div>

        <div class="grid lg:grid-cols-3">
        <div class="m-2 lg:flex lg:max-w-lg">
        <Card/>
    </div>
    <div class="m-2 lg:flex lg:max-w-lg">
       <Card/>
    </div>
    <div class="m-2 lg:flex lg:max-w-lg">
        <Card/>
    </div>
</div>
<Link to='/home'>
  <FloatButton icon={<PlusOutlined />} type="default" style={{ right: 94 }} /></Link>

</div>
  )
}
