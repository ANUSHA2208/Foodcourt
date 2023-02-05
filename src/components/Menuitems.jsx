import React from 'react'
import { Icon } from '@iconify/react';

export const Menuitems = () => {
  return (
    <div className='p-16'>
        <h1 className='text-semibold text-white text-5xl'>Chinese</h1>
        <br/>
        <div className='w-full h-px bg-[#C4E538]'></div>

        <div className='mt-5'>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 lg:px-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <tbody>
            <tr>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <div className='flex'>
              <div className='flex-initial w-18'>
              <Icon icon="mdi:square-circle" color="green" width="24" height="24"/> 
              </div>
              <div>
              <Icon icon="mdi:square-circle" color="red" width="24" height="24" />
              </div>
              </div>
             </td>

              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
                Momos
              </td>
              <td class="text-xl text-white  font-light px-6 py-4 whitespace-nowrap">
              150
              </td>   
           </tr>


           <tr>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <div className='flex'>
              <div className='flex-initial w-18'>
              <Icon icon="mdi:square-circle" color="green" width="24" height="24"/> 
              </div>
              <div>
              <Icon icon="mdi:square-circle" color="red" width="24" height="24" />
              </div>
              </div>
             </td>

              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
                Noodles
              </td>
              <td class="text-xl text-white  font-light px-6 py-4 whitespace-nowrap">
              150
              </td>   
           </tr>


           <tr>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <div className='flex'>
              <div className='flex-initial w-18'>
              <Icon icon="mdi:square-circle" color="green" width="24" height="24"/> 
              </div>
              <div>
              <Icon icon="mdi:square-circle" color="red" width="24" height="24" />
              </div>
              </div>
             </td>

              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
                Panner fills
              </td>
              <td class="text-xl text-white  font-light px-6 py-4 whitespace-nowrap">
              150
              </td>   
           </tr>



           <tr>
              <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
              <div className='flex'>
              <div className='flex-initial w-18'>
              <Icon icon="mdi:square-circle" color="green" width="24" height="24"/> 
              </div>
              <div>
              {/* <Icon icon="mdi:square-circle" color="red" width="24" height="24" /> */}
              </div>
              </div>
             </td>

              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
                Gobi
              </td>
              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
              80
              </td>   
           </tr>


           <tr>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <div className='flex'>
              <div className='flex-initial w-18'>
              {/* <Icon icon="mdi:square-circle" color="green" width="24" height="24"/>  */}
              </div>
              <div>
              <Icon icon="mdi:square-circle" color="red" width="24" height="24" />
              </div>
              </div>
             </td>

              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
                Sushi
              </td>
              <td class="text-xl text-white font-light px-6 py-4 whitespace-nowrap">
              550
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
  );
}

export default Menuitems;