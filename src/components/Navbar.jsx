import React, { useState } from 'react';

// Import icons we'll use for our navbar
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

// Import Link for smooth scrolling between sections
import { Link } from 'react-scroll';


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-15 flex shadow-md justify-between items-center p-3 px-4 bg-white text-black font-thin font-serif'>
        <div>
            <h1 className='font-thin text-2xl italic font-serif'>AB</h1>
        </div>

        {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8 text-sm font-light font-sans cursor-pointer'>
        <li>
          <Link to='home' smooth={true} duration={500} className='text-zinc-600 hover:text-black hover:font-medium'>
            HOME
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className='text-zinc-600 hover:text-black hover:font-medium'>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='text-zinc-600 hover:text-black hover:font-medium'>
            ABOUT
          </Link>
          </li>
          
        {/* ... other menu items ... */}
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
        {/* ... other mobile menu items ... */}
      </ul>

      {/* Social icons - hidden on smaller screens, shown on large screens */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* LinkedIn - sliding animation on hover */}
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ed8eae] shadow-md shadow-[#9e9b9b]'>
            <a href="https://www.linkedin.com/in/anika-bhargav-179b7b2b7/" className='flex justify-between items-center w-full text-white px-4'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ed8eae] shadow-md shadow-[#9e9b9b]'>
            <a href="https://github.com/anikabear" className='flex justify-between items-center w-full text-white px-4'>
              LinkedIn <FaGithub size={30} />
            </a>
          </li>
          {/* ... other social links ... */}
        </ul>
      </div>
    </div> 
  )
}
export default Navbar