import React from 'react'
import { Link } from "react-router-dom";
import aboutImage from "../assets/about_image.png"
import {motion } from "framer-motion";

const About = () => {
  return (
    <div 
    className='mt-10 mb-6 py-28 border-neutral-400' id='about'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
             <div> 
                <h1 className='text-4xl md:text-8xl sm:text-5xl font-bebasneue'>About Me</h1>
            </div>
            <div>
                <h1 className='text-xl md:text-3xl'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
                <p className='text-neutral-400 my-10'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
                <Link
            to="/about"
            className="uppercase text-brandYellow py-1 border-b border-brandYellow">
            More About Me
          </Link>
                <img src={aboutImage} className='md:hidden mt-12' alt="" />
            </div>
        </div>
    </div>
  )
}

export default About