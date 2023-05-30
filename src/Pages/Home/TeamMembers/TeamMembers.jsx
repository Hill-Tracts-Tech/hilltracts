import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../../styles/styles.css";
import { data } from "./data";
const TeamMembers = () => {
  return (
    <div className="w-[90%] mx-auto mb-10">
      <div className="m-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] m-title text-center uppercase">
          Team
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize font-[cursive]">
          Our Best Team members
        </h1>
      </div>
      <div className="responsive-container-block container">
        <div className="responsive-container-block">
          {data &&
            data.map((info) => (
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
                    <a href="https://www.twitter.com">
                      <FaFacebookF className="twitter-icon" />
                    </a>
                    <a href="https://www.facebook.com">
                      <FaGithub className="github-icon" />
                    </a>
                    <a href="https://www.facebook.com">
                      <FaLinkedinIn className="linkedin-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
