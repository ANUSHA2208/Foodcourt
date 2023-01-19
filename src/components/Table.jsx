import React,{ useState }  from 'react'
import { Icon } from '@iconify/react';
import {  Popover,Modal } from 'antd';
import Card from './Card'
import {EyeOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'

export const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const content = (
    <div>
    <div class="flex flex-row">
    <div class="basis-1/4"><EyeOutlined/></div>
    <div class="basis-1/4 px-8 cursor-pointer" onClick={showModal}>View</div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <Card/>
        </Modal>
  </div>
   <div class="flex flex-row">
    <div class="basis-1/4"><EditOutlined /></div>
    <div class="basis-1/4 px-8">Edit</div>
  </div>
   <div class="flex flex-row">
    <div class="basis-1/4"><DeleteOutlined /></div>
    <div class="basis-1/4 px-8">Delete</div>
  </div>
  </div>
  );
  
  return (
    <div>
        <div className='xl:max-w-1xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full py-4'>
        <div className='h-auto w-full box'>
        <h1 class="flex px-5 py-4 font-semibold text-3xl">Vendors</h1>

        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 lg:px-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
      <div class="overflow-hidden">
        <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Sl No.
              </th>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Shop Name
              </th>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Vendor Name
              </th>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Bio
              </th>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Phone No.
              </th>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Email
              </th>
              <th scope="col" class="text-sm font-medium border-gray-300 px-6 py-4 border-r bg-[#E1F19B]">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r bg-[#E1F19B]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Lorem ipsum dolor sit amet,
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                +91 1234567890
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Otto@gmail.com
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              <Icon icon="mdi:check-circle-outline" width="55" height="49"/>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              <Popover content={content}>
              <Icon icon="carbon:overflow-menu-vertical" width="45" height="40" />
              </Popover>
          
              </td>
             

            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Lorem ipsum dolor sit amet,
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              +91 1234567890
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Mark@gmail.com
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              <Icon icon="ic:baseline-pending-actions" color="#7e7e7e" width="50" height="50" />
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              <Popover content={content}>
              <Icon icon="carbon:overflow-menu-vertical" width="45" height="40" />
              </Popover>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
    </div>
  )
}


export default Table;