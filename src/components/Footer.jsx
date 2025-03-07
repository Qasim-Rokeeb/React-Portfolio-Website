import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const About = () => {
  return (
    <div className='my-10 border-t border-neutral-400 py-28 ' id='footer'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
             <div className='mb-6'> 
                <h1 className='text-3xl md:text-7xl sm:text-5xl mb-6 font-bebasneue'>Let's Connect</h1>
                 <p className='text-neutral-400 font-light'>Say Hello <span className='text-white border-b border-brandYellow'>Robertgarcia@gmail.com</span></p>
                 <p className='text-neutral-400 font-light'>For more info here's my <span className='text-white border-b border-brandYellow'>resume</span></p>
                 <div className='inline-flex text-brandYellow mt-4  text-2xl space-x-4'> <FaLinkedinIn /><FaGithub /><BsTwitterX /><FiInstagram /></div>
            </div>
            <div className=''>
                <form action="">
                    <label htmlFor="" className='block mb-2 font-light'>Name</label><input type="text"  className='bg-neutral-800 w-full rounded-md h-10 mb-6'/>
                    <label htmlFor="" className='block mb-2 font-light'>Email</label><input type="email" className='bg-neutral-800 w-full rounded-md h-10 mb-6' />
                    <label htmlFor="" className='block mb-2 font-light'>Subject</label><input type="text"  className='bg-neutral-800 w-full rounded-md h-10 mb-6'/>
                    <label htmlFor="" className='block mb-2 font-light'>Messaget</label><textarea name=""  className='block bg-neutral-800 w-full rounded-md h-24 mb-6' id=""></textarea>
                    <button className='bg-brandYellow font-semibold text-[15px] text-black py-3 px-7 rounded-full uppercase'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default About