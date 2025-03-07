import React from 'react'
import projectCard from "../assets/project_card.png"
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { featuredProjects } from "../constants";

const Features = () => {
  return (
    <div className='mt-20 border-t border-neutral-700/80 w-full' id='features'>
        <div className='max-w-xl' >
            <h1 className='text-3xl sm:text-5xl md:text-7xl font-bebasneue mt-10'>Featured Projects</h1>
            <p className='text-neutral-400'>Here are some of the selected projects that showcase my passion for front-end development.</p>
        </div>
        {featuredProjects.map((project, index) => (
        <div key={index} className='my-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
            
                     <div>
                         <img src={project.image} alt="" />
                     </div>
              <div className='inline-flex flex-col justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl my-3'>{project.name}</h1>
                <p className='text-neutral-400'>{project.description}</p>
                <div className='`mt-6'> 
                    <h2 className='text-xl border-b border-neutral-400 uppercase py-3'>Project info</h2>
                    <div className='flex space-x-4 justify-between py-6 border-b border-neutral-400'>
                        <p>Year</p>
                        <p>{project.year}</p>
                    </div>
                    <div className='flex space-x-4 justify-between py-6 border-b border-neutral-400'>
                        <p>Role</p>
                        <p>{project.role}</p>
                    </div>
                </div>
                <div className='flex space-x-4 mt-6 uppercase'>
                    <div className='flex space-x-4 text-brandYellow border-b border-brandYellow'>
                    <a href="">live on demo </a>
                    <GoArrowUpRight />
                    </div>
                    <div className='flex space-x-4 text-brandYellow border-b border-brandYellow'>
                    <a href="">View on github </a>
                    <FaGithub />
                    </div>
                </div>
              </div>
            
           
        </div>
        ))}
    </div>
  )
}

export default Features