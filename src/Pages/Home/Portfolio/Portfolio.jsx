import { filterData } from "./filterData";
import "../../../styles/styles.css";
import { useState } from "react";
const Portfolio = () => {
  const [active, setActive] = useState(1);
  const handleFilter = (currentID) => {
    setActive(currentID);
  };
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="p-title-outline mx-auto w-32">
        <h2 className="text-[#1DA1F2] p-title uppercase">Project</h2>
      </div>
      <h1 className="text-3xl text-gray-100 font-bold capitalize">
        Awesome Portfolio and Projects
      </h1>
      <div className="flex justify-start items-center mt-[-18px]">
        <div></div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-5">
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
            <h3 className="font-semibold text-[#1DA1F2]">Software</h3>
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
            <h3 className="font-semibold text-[#1DA1F2]">Cloud</h3>
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
            <h3 className="font-semibold text-[#1DA1F2]">Web Dev</h3>
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
            <h3 className="font-semibold text-[#1DA1F2]">Web Design</h3>
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
            <h3 className="font-semibold text-[#1DA1F2]">Marketing</h3>
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
            <h3 className="font-semibold text-[#1DA1F2]">Security</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
