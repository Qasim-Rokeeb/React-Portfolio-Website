import React from 'react'
import image from "../assets/image.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='mt-15 flex flex-wrap items-center justify-between'>
        <div className='mt-10 w-full lg:w-1/2'>
            <h1 className='text-5xl md:text-8xl font-bebasneue p-6 tracking-tight'>Hi, I am <br />Robert Garcia</h1>
            <p className='ml-6 font-manrope text-neutral-400'>A Sydney based front-end developer passionate about building <br />accessible and user friendly websites.</p>
            <div className='flex ml-6 font-manrope mt-6 space-x-4'>
                <a href="" className=' inline-flex font-bold justify-center items-center text-black bg-brandYellow rounded-full px-6 py-2 font-manrope cursor-pointer'>Contact Me</a>
                <div className='inline-flex h-14 w-14 justify-center items-center text-brandYellow bg-neutral-800 rounded-full cursor-pointer' >
                <FaLinkedinIn />
                </div>
                <div className='inline-flex h-14 w-14 justify-center items-center text-brandYellow bg-neutral-800  rounded-full cursor-pointer' >
                <FaGithub />
                </div>
            </div>
        </div>
        <div className='w-full mt-6 lg:w-1/2'>
            <img src={image} alt=""  className='h-70 w-auto'/>
        </div>
    </div>
  )
}

export default Hero