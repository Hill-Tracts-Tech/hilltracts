import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../../styles/styles.css";
import { data } from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";
const TeamMembers = () => {
  const [more, setMore] = useState(4);
  const [less, setLess] = useState(0);
  const [check, setCheck] = useState(true);
  const handleSeeMore = () => {
    if (more > data.length) {
      setCheck(false);
    }
    setMore(more + 4);
  };
  const handleSeeLess = () => {
    if (!check) {
      setMore(4);
      setLess(0);
      setCheck(true);
    }
  };
  console.log(more);
  return (
    <div className="w-[90%] mx-auto mb-10">
      <div className="m-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] m-title text-center uppercase">
          Team
        </h2>
      </div>
     <div className="lg:flex  justify-between items-center">
     <div className="w-1/2 mx-auto col-span-2">
        <h1 className="text-3xl font-bold text-center capitalize font-[cursive] tracking-[6px] " style={{lineHeight:"70px"}}>
          Our <br></br> Best Team members
        </h1>
      </div>
      <div className=" container col-span-10">
        <div className="responsive-container-block">
          {data &&
            data.slice(less, more).map((info) => (
              <div
                key={info.id}
                className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container"
              >
                <div className="card">
                  <div className="team-image-wrapper">
                    <img className="team-member-image" src={info.imgURL} />
                  </div>
                  <p className="text-blk name">{info.name}</p>
                  <p className="text-blk position">{info.designation}</p>
                  <div className="social-icons">
                    <Link target={"_blank"} to={info.facebook}>
                      <FaFacebookF className="facebook-icon" />
                    </Link>
                    <a href={info.github}>
                      <FaGithub className="github-icon" />
                    </a>
                    <a href={info.linkedIn}>
                      <FaLinkedinIn className="linkedin-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full text-end mr-6">
          {check ? (
            <button
              onClick={handleSeeMore}
              className="border-solid border-2 border-blue-400 rounded-md px-3 py-2 bg-indigo-500 text-gray-100 hover:bg-transparent hover:text-gray-800 transition-all"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleSeeLess}
              className="border-solid border-2 border-blue-400 rounded-md px-3 py-2 bg-indigo-500 text-gray-100 hover:bg-transparent hover:text-gray-800 transition-all"
            >
              See Less
            </button>
          )}
        </div>
      </div>
     </div>
    </div>
  );
};

export default TeamMembers;
