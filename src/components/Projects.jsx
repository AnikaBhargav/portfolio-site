import React from 'react'
import code from '../assets/project1.png';
import code2 from '../assets/project2.png';


const Projects = () => {
  return (
    
    <div name='projects' className='w-screen pr-3 pl-3 pt-2 pb-2 bg-gradient-to-r from-white to-beige'>
      <div name='project' className='w-full flex flex-col md:flex-row justify-around p-6'>
        <a href="https://anika-bhargav.webflow.io/work/project-1"><div className='container p-4 hover:scale-105 duration-500 '><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code} /></div></a>
      
        <a href="https://github.com/anikabear/Habit-Tracker"><div className='container p-4 hover:scale-105 duration-500'><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code2} /></div></a>
      

      </div>
    </div>
    // <div id='project-carousel' className='relative w-full' data-carousel='slide'>
    //    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <a href="https://anika-bhargav.webflow.io/work/project-1"><div className='container p-4 hover:scale-105 duration-500 '><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code} /></div></a>
    //     </div>
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <a href="https://github.com/anikabear/Habit-Tracker"><div className='container p-4 hover:scale-105 duration-500'><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code2} /></div></a>
    //     </div>
    //    </div>
    // </div>
    



  );
};

export default Projects;