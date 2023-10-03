import React, { useState } from 'react';
import Webcam from 'react-webcam';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css';
import HomeImage from '../../assets/home.jpg'
import Image from 'next/image';
import Home1 from '../../assets/home1.jpg'

export default function Index() {

    return (
        <div className=''>
            <div className='w-[80%] m-auto h-[40vh] bg-[#4d4aff] flex flex-col gap-3 justify-center items-center'>
                <h2 className='text-[3rem] text-white font-semibold'>Image Picker Gallary</h2>
                <button className='bg-[#79f777] p-2 font-medium rounded-md text-[#292929]'>Pick Image</button>
            </div>
        </div>
    )
}
