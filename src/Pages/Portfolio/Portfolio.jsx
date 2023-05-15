import { filterData } from "./filterData";
import "../../styles/portfolio.css";
import { useState } from "react";
const Portfolio = () => {
  const [active, setActive] = useState(1);
  const handleFilter = (currentID) => {
    setActive(currentID);
  };
  console.log(active);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="p-title-outline w-32">
        <h2 className="text-orange-400 p-title uppercase">Project</h2>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl text-gray-800 font-bold capitalize">Awesome Portfolio and Projects</h1>
        </div>
        <div>
          <ul>
            {filterData.map((project, i) => (
              <li
                className={
                  project.filterId == active ? "active project" : "project"
                }
                key={i}
                onClick={() => handleFilter(project.filterId)}
              >
                {project.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-10">
        <div className="project-card">
          <img
            className="w-full h-full img"
            src="https://i.ibb.co/mHxW1w3/web-dev-resized.png"
            alt="web_development"
          />
          <div className="w-full details-project">
            <a href="#" className="text-white">
              Software Development
            </a>
            <h3 className="font-semibold text-orange-400">Software</h3>
          </div>
        </div>
        <div className="project-card">
          <img
            className="w-full h-full img"
            src="https://i.ibb.co/mHxW1w3/web-dev-resized.png"
            alt="web_development"
          />
          <div className="w-full details-project">
            <a href="#" className="text-white">
              Cloud Computing
            </a>
            <h3 className="font-semibold text-orange-400">Cloud</h3>
          </div>
        </div>
        <div className="project-card">
          <img
            className="w-full h-full img"
            src="https://i.ibb.co/mHxW1w3/web-dev-resized.png"
            alt="web_development"
          />
          <div className="w-full details-project">
            <a href="#" className="text-white">
              Web Development
            </a>
            <h3 className="font-semibold text-orange-400">Web Dev</h3>
          </div>
        </div>
        <div className="project-card">
          <img
            className="w-full h-full img"
            src="https://i.ibb.co/mHxW1w3/web-dev-resized.png"
            alt="web_development"
          />
          <div className="w-full details-project">
            <a href="#" className="text-white">
              Web Design
            </a>
            <h3 className="font-semibold text-orange-400">Web Design</h3>
          </div>
        </div>
        <div className="project-card">
          <img
            className="w-full h-full img"
            src="https://i.ibb.co/mHxW1w3/web-dev-resized.png"
            alt="web_development"
          />
          <div className="w-full details-project">
            <a href="#" className="text-white">
              Digital Marketing
            </a>
            <h3 className="font-semibold text-orange-400">Marketing</h3>
          </div>
        </div>
        <div className="project-card">
          <img
            className="w-full h-full img"
            src="https://i.ibb.co/mHxW1w3/web-dev-resized.png"
            alt="web_development"
          />
          <div className="w-full details-project">
            <a href="#" className="text-white">
              Cyber Security
            </a>
            <h3 className="font-semibold text-orange-400">Security</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
