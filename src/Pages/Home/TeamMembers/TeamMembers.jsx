import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../../styles/styles.css";
import { data } from "./data";
const TeamMembers = () => {
  console.log(data);
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <div className="s-title-outline w-48 mx-auto my-5">
        <h2 className="text-lg font-semibold text-orange-400 s-title text-center uppercase">
          Team
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize">
          Our Best Team members
        </h1>
      </div>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-3 mt-8">
        {data?.map((info) => (
          <div
            key={info.id}
            className="bg-slate-50">
            <div className="social-icons-wrapper">
              <img className="h-[250px] w-full" src={info.imgURL} alt={info.name} />
              <div className="flex justify-center z-0 items-center gap-2 social-icons">
                <button className="bg-orange-500 p-2 rounded-full">
                  <a href={info.faceBook}>
                    <FaFacebookF color="white" />
                  </a>
                </button>
                <button className="bg-orange-500 p-2 rounded-full">
                  <a href={info.gitHub}>
                    <FaGithub color="white" />
                  </a>
                </button>
                <button className="bg-orange-500 p-2 rounded-full">
                  <a href={info.linkedIn}>
                    <FaLinkedinIn color="white" />
                  </a>
                </button>
              </div>
            </div>
            <div className="text-center z-10 leading-none">
              <h3 className="text-xl font-semibold">{info.name}</h3>
              <span className="text-sm font-semibold text-orange-400">
                {info.designation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
