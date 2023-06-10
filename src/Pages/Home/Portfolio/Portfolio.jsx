import { filterData } from "./filterData";
import "../../../styles/styles.css";
import { useState } from "react";
import { portfolioData } from "./PortfolioProjects";
import { Link } from "react-router-dom";
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
  return (
    <div className="max-w-[90%] mx-auto my-10">
      <div className="p-title-outline mx-auto w-32 mt-16">
        <div className="text-2xl font-semibold text-[#1DA1F2] p-title uppercase">
          Project
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-2xl dark:text-[#fff] font-bold text-center capitalize  tracking-[6px] font-[cursive]">
          Awesome Portfolio and Projects
        </h1>
      </div>
      <div className="flex justify-start items-center my-10">
        <div></div>
        <div>
          <ul>
            {filterData.map((project, i) => (
              <li
                className={
                  project.category == active
                    ? "active project "
                    : "project dark:text-gray-400 text-black"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 my-5">
        {filteredItems.length == 0 ? (
          <p className="text-start text-xl text-red-500">No project found</p>
        ) : (
          filteredItems.map((data) => (
            <div key={data.id} className="project-card rounded-md">
              <div className="image-container rounded-md">
                <img
                  className="rounded-md"
                  src={data.imgURL}
                  alt={data.imgURL}
                />
              </div>
              <div className="w-full details-project">
                <Link
                  target={"_blank"}
                  to={data.projectLink}
                  className="text-white "
                >
                  {data.title}
                </Link>
                <h3 className="font-semibold text-[#1DA1F2]">
                  {data.projectType}
                </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Portfolio;
