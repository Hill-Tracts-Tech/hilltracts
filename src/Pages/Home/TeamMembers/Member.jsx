import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../../styles/styles.css";
const Member = (info) => {
  return (
      <div className="relative mx-auto w-full">
        <div className="border-4 rounded-full border-indigo-500/50 w-[240px] h-[240px]">
          <img
            className="w-[100%] h-[100%] rounded-full border-indigo-500/50 object-contain"
            src={info.info.imgURL}
            alt={info.info.name}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center z-0 items-center gap-2">
          <button className="bg-[#1DA1F2] p-2 rounded-full">
            <a href={info.info.faceBook}>
              <FaFacebookF color="white" />
            </a>
          </button>
          <button className="bg-[#1DA1F2] p-2 rounded-full">
            <a href={info.info.gitHub}>
              <FaGithub color="white" />
            </a>
          </button>
          <button className="bg-[#1DA1F2] p-2 rounded-full">
            <a href={info.info.linkedIn}>
              <FaLinkedinIn color="white" />
            </a>
          </button>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">{info.info.name}</h3>
          <span className="text-sm font-semibold text-[#1DA1F2]">
            {info.info.designation}
          </span>
        </div>
      </div>
  );
};

export default Member;
