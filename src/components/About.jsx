import React from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const About = () => {
  return (
    <div 
      name="about"
      id="about"
      className="w-full h-screen bg-beigeDark text-black p-20 flex flex-col gap-4 justify-evenly"
    >

      <div name="heading" className="flex flex-col gap-2">
        <h1 className="text-7xl font-medium font-waterfall" >About Me</h1>
        <p className="font-serif">As a passionate creative with a study background in tech, I love to design and develop practical and seamless products for users.</p>
      </div>

      <div name="education" className="pt-3" >
        <h2 className="text-left font-serif font-normal text-xl m-2">Education ── .✦</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3 m-1'>
          <div className="container content-div bg-[#f3ecec] rounded-xl p-5">
            <p className='text-[#be6575] font-serif'>2022-2024</p>
            <h3 className='font-bold'>Bachelor of Science - Computer Science</h3>
            <p className='font-light'>The University of Auckland</p>
          </div>
          <div className="container content-div bg-[#f3ecec] rounded-xl p-5">
            <p className='text-[#be6575] font-serif'>Nov 2022</p>
            <h3 className='font-bold'>The Complete Full Stack Web Development Course</h3>
            <p className='font-light'>Udemy Online</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        

          <li className='hover:scale-105 duration-500 rounded-md w-40 h-12 m-3 flex justify-between items-center bg-[#ed8eae] shadow-md shadow-[#9e9b9b]'>
            <a href="https://www.linkedin.com/in/anika-bhargav-179b7b2b7/" className='flex justify-between items-center w-full text-white px-4'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='hover:scale-105 duration-500 rounded-md w-40 h-12 m-3 flex justify-between items-center bg-[#eba2ba] shadow-md shadow-[#9e9b9b]'>
            <a href="https://github.com/AnikaBhargav" className='flex justify-between items-center w-full text-white px-4'>
              Github <FaGithub size={30} />
            </a>
          </li>
          
        
      </div>

      

    </div> 
  )
}
export default About
