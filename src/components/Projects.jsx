import React from 'react'
import code from '../assets/Care.png';
import code2 from '../assets/Hbt.png';
import code3 from '../assets/portfolio.png';


const Projects = () => {
  return (
    
    <div name='projects' className='w-screen flex flex-col pr-7 pl-7 pt-10 pb-2 bg-gradient-to-r from-white to-beige'>
      {/* <div name='project' className='w-full flex flex-col md:flex-row justify-around p-6'>
        <a href="https://anika-bhargav.webflow.io/work/project-1"><div className='container p-4 hover:scale-105 duration-500 '><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code} /></div></a>
      
        <a href="https://github.com/AnikaBhargav/Habit-Tracker"><div className='container p-4 hover:scale-105 duration-500'><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code2} /></div></a>

        <a href="https://github.com/AnikaBhargav/portfolio-site"><div className='container p-4 hover:scale-105 duration-500'><img className="rounded-xl shadow-xl shadow-[#9e9b9b]" src={code3} /></div></a>
      

      </div> */}

      <div className="carousel carousel-center rounded-box p-5">
        <div id='item1' className="carousel-item max-w-md md:max-w-4xl">
        <a href="https://anika-bhargav.webflow.io/work/project-1"><div className=' container p-2 hover:scale-105 duration-500 '><img className="rounded-xl shadow-md shadow-[#9e9b9b]" src={code} /></div></a>
        
        </div>
        <div id='item2' className="carousel-item max-w-md md:max-w-4xl">
          <a href="https://github.com/AnikaBhargav/Habit-Tracker"><div className=' container p-2 hover:scale-105 duration-500'><img className="rounded-xl shadow-md shadow-[#9e9b9b]" src={code2} /></div></a>

        </div>
        <div id='item3' className="carousel-item max-w-md md:max-w-4xl">
          <a href="https://github.com/AnikaBhargav/portfolio-site"><div className='container p-2 hover:scale-105 duration-500'><img className="rounded-xl shadow-md shadow-[#9e9b9b]" src={code3} /></div></a>

        </div>
        
      </div>
      <div className="flex w-full justify-center gap-2 p-3">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
 
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