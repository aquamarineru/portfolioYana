import React, { useState } from 'react'
import { servicesData, servicesTabs } from "./ServicesData";
import MyServicesItems from "./MyServicesItems";

const MyServices = () => {
    const [projects, setProjects] = useState(
        servicesData.filter((project) => project.title.toLowerCase() === "portraits")
      );
      const [active, setActive] = useState(0);
    
      const handleClick = (e, index) => {
        const itemName = e.target.textContent.toLowerCase();
        const newProjects = servicesData.filter(
          (project) => project.title.toLowerCase() === itemName
        );
        setProjects(newProjects);
        setActive(index);
      };
    
      return (
          <div className="py-24 md:m-0" id='services'>
            <h2 className="font-ricordi text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase">
              My services
            </h2>
            <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>what I offer</h3>
            <div className="py-16 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-around">
              <div className="space-y-4 pt-5 lg:px-32 font-ricordi uppercase relative text-dark dark:text-light ">
                {servicesTabs.map((tab, index) => {
                  return (
                    <h3
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                      key={index}
                      className={`relative ${active === index ? "text-tomatoes before-element" : ""}`}
                    >
                      {tab.name}
                    </h3>
                  );
                })}
              </div>
              <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
                {projects.map((project) => {
                  return (
                    <MyServicesItems key={project.title} item={project} />
                  );
                })}
              </div>
            </div>
          </div>
      );
}

export default MyServices
