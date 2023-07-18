import React, { useState, useEffect } from 'react'
import MyServicesItems from "./MyServicesItems";


const MyServices = ({servicesData}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      if (servicesData) {
        const sortOrder = ["portraits", "wedding", "love story", "family", "products", "hotels and foods"];
        const sortedServicesData = [...servicesData].sort((a, b) => sortOrder.indexOf(a.title.toLowerCase()) - sortOrder.indexOf(b.title.toLowerCase()));
          setProjects(
            sortedServicesData.filter((project) => project.title.toLowerCase() === "portraits")
          );
         
      }
  }, [servicesData]);

  const [active, setActive] = useState(0);
  
  const handleClick = (e, index) => {
      const itemName = e.target.textContent.toLowerCase();
      const newProjects = servicesData.filter(
        (project) => project.title.toLowerCase() === itemName
      );
      setProjects(newProjects);
      setActive(index);
  };
    
  
if (!servicesData) {
      return <div>Loading...</div>;
  } 
    
      return (
        <div className="pt-24 px-7 md:m-0" id='services'>
          <h2 className="font-ricordi text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase">
            My services
          </h2>
          <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>what I offer</h3>
          <div className="pt-16 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-around lg:justify-center">
            <div className="space-y-4 pt-5 lg:px-32 font-ricordi uppercase relative text-dark dark:text-light ">
              {servicesData && [...servicesData].sort((a, b) => {
                const sortOrder = ["portraits", "wedding", "love story", "family", "products", "hotels and foods"];
                return sortOrder.indexOf(a.title.toLowerCase()) - sortOrder.indexOf(b.title.toLowerCase());
              }).map((tab, index) => {
                return (
                  <h3
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    key={index}
                    className={`relative ${active === index ? "text-tomatoes before-element" : ""}`}
                  >
                    {tab.title.toLowerCase()}
                  </h3>
                );
              })}
            </div>
            <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
              {projects && projects.map((project) => {
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
