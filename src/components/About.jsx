import React from 'react'

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

      

    </div> 
  )
}
export default About
