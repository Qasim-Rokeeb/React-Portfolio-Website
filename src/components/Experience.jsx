import React from 'react'
import { experience} from '../constants'
const Experience = () => {
  return (
    <div className='mt-10 border-t py-10 border-neutral-400'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
            <h1 className='text-3xl md:text-6xl sm:text-5xl font-bebasneue'>My experience</h1>
            </div>
            <div>
                {experience.map((experience, index)=>(
                  <div key={index}>
                 <div className='flex flex-col md:flex-row justify-between mt-8'>
                        <h1 className='text-2xl'>{experience.role}</h1>
                        <p className=''>{experience.duration}</p>
               </div>
                   <p className='text-brandYellow font-bold mt-4'>{experience.company}</p>
                   <p className='text-neutral-400 '>
           {experience.description}
                  </p>
                 </div>
                
                
                ))}
               
               </div>
               </div> 

    </div>
  )
}

export default Experience