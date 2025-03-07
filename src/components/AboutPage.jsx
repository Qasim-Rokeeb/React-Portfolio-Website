import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import smallImage from "../assets/smallAbout.png";
import imageBig from "../assets/imageBig.png";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top on load
      }, []);
  return (
    <div className=' mb-6 py-28 border-neutral-400' id='about'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
             <div> 
                <h1 className='text-4xl md:text-8xl sm:text-5xl font-bebasneue'>About Me</h1>
            </div>
            <div>
                <h1 className='text-xl md:text-3xl'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
                <p className='text-neutral-400 my-10'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
                <Link
            to="/"
            className="uppercase text-brandYellow py-1 border-b border-brandYellow">
            Back to home page
          </Link>
          <div className='mt-6 flex space-x-4'>
             <a href="" className='uppercase px-4 py-2 bg-brandYellow text-black rounded-full font-bold'>Download Resume </a>
             <div className='inline-flex justify-center items-center text-brandYellow h-12 w-12 bg-neutral-700 p-2 rounded-full'>
              <FaLinkedinIn />
              </div>
              <div className='inline-flex justify-center items-center text-brandYellow h-12 w-12 bg-neutral-700 p-2 rounded-full'>
              <FaGithub />
              </div>
          </div>
                
               
            </div>
        </div>
        <img src={imageBig} className="mt-10 hidden md:block" alt="" />
        <img src={smallImage} className="md:hidden mt-10" alt="" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="">
            <h1 className="text-3xl md:text-6xl sm:text-5xl font-bebasneue">My capabilities</h1>
            </div>
            <div className="">
                <p className="text-neutral-400">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                <div className="flex flex-wrap space-x-4 space-y-2 items-center mt-6 ">
                    <a className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">HTML</a>
                    <a className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">CSS</a>
                
                    <a className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">JAVASCRIPT</a>
                    <a className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">JQuery</a>
                    <p className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">ACCESSIBLITY</p>
                    <p className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">FIGMA</p>
                    <p className="uppercase px-6 py-2 rounded-full text-white border font-bold hover:bg-brandYellow hover:text-black border-white">tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About