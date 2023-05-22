import { filterData } from "./filterData";
import "../../../styles/styles.css";
import { useState } from "react";
import { portfolioData } from "./PortfolioProjects";
const Portfolio = () => {
  const [active, setActive] = useState("all");
  const [filterProject, setFilterProject] = useState("all");
  const handleFilter = (currentID) => {
    setActive(currentID);
    setFilterProject(currentID);
  };
  const filteredItems =
    filterProject === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.projectType === filterProject);
  console.log(active, filterProject);
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="p-title-outline mx-auto w-32 mt-20">
        <h2 className="text-[#1DA1F2] p-title uppercase">Project</h2>
      </div>
      <h1 className="text-3xl text-gray-900 font-bold capitalize">
        Awesome Portfolio and Projects
      </h1>
      <div className="flex justify-start items-center mt-[-30px]">
        <div></div>
        <div>
          <ul>
            {filterData.map((project, i) => (
              <li
                className={
                  project.category == active ? "active project" : "project"
                }
                key={i}
                onClick={() => handleFilter(project.category)}
              >
                {project.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 my-5">
        {filteredItems.map((data) => (
          <div key={data.id} className="project-card">
            <img
              className="w-full h-[350px] img"
              src={data.imgURL}
              alt={data.imgURL}
            />
            <div className="w-full details-project">
              <a href="#" className="text-white">
                {data.title}
              </a>
              <h3 className="font-semibold text-[#1DA1F2]">
                {data.projectType}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
