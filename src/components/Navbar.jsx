import React from 'react'
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className='sticky top-0 z-50 py-3 backdrop-blur-lg'>
      <div className='container px-4 mx-auto flex justify-between'>
        <div className='font-bebasneue text-2xl'>
          <p>Robert Garcia</p>
        </div>
        <div className='hidden lg:flex test-xs ml-14 space-x-4 font-manrope'>
          <ul  className='flex space-x-4'>
            <li><a href="#features">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            <li className='py-4'><a href="#features">Work</a></li>
            <li className='py-4'><a href="#about">About</a></li>
            <li className='py-4'><a href="#footer">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;