import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Link } from 'react-router-dom'
import uploading from '../assets/uploading.png'

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export const Addmenu = () => {
  return (
    <div>
     <div className='w-1/2 mt-44 h-96 m-auto justify-center items-center '>
         <Dragger {...props}>
    <p className="ant-upload-drag-icon">
    <div className='w-44 h-auto m-auto'>
      <img src={uploading}/>
      </div>
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      File type .csv
    </p>
  </Dragger>
    </div>
    </div>
  )
}

export default Addmenu;