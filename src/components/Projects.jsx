import { useEffect, useRef, useState } from "react";
import code from "../assets/Care.png";
import code2 from "../assets/Hbt.png";
import code3 from "../assets/portfolio.png";

export default function Projects() {
  const [visibleItem, setVisibleItem] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItem(entry.target.id); // Set the currently visible item's ID
          }
        });
      },
      { threshold: 0.9 } // Adjust this to control how much of the item must be visible
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));

    return () => {
      itemRefs.current.forEach((item) => item && observer.unobserve(item));
    };
  }, []);

  const projects = [
    {
      id: "item1",
      link: "https://anika-bhargav.webflow.io/work/project-1",
      img: code,
    },
    {
      id: "item2",
      link: "https://github.com/AnikaBhargav/Habit-Tracker",
      img: code2,
    },
    {
      id: "item3",
      link: "https://github.com/AnikaBhargav/portfolio-site",
      img: code3,
    },
  ];

  const handleClick = (project, index, e) => {
    if (visibleItem !== project.id) {
      e.preventDefault(); // Prevent immediate navigation
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div
      name="projects"
      className="w-screen flex flex-col pr-7 pl-7 pt-10 pb-2 bg-gradient-to-r from-white to-beige"
    >
      <div className="carousel carousel-center rounded-box p-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={project.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className="carousel-item max-w-md md:max-w-4xl"
          >
            <a
              href={visibleItem === project.id ? project.link : undefined}
              onClick={(e) => {
                if (visibleItem !== project.id) e.preventDefault();
              }}
              className={`${
                visibleItem === project.id ? "cursor-pointer" : "cursor"
              }`}
            >
              <div className="container p-2 hover:scale-105 duration-500">
                <img
                  className="rounded-xl shadow-md shadow-[#9e9b9b]"
                  src={project.img}
                  alt={`Project ${index + 1}`}
                />
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 p-3">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className={`btn btn-xs border-none ${
              visibleItem === project.id
                ? "bg-[#ed8eae] text-white" // Pink button when active
                : "bg-black text-gray-600" // Neutral when inactive
            }`}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}