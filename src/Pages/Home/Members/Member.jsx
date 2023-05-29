import PropTypes from "prop-types";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../../styles/styles.css";
import "./style.css";

function Member(props) {
  console.log(props);
  return (
    <div className="social-icons-wrapper">
      <div className="card rounded-full h-full p-3">
        <img
          className="member-img rounded-full h-full ring ring-primary ring-offset-base-100 ring-offset-2"
          src={props.url}
          alt="product image"
        />
      </div>
      <div className="flex justify-center z-0 items-center gap-2 social-icons">
        <button className="bg-[#1DA1F2] p-2 rounded-full">
          <a href={props.faceBook}>
            <FaFacebookF color="white" />
          </a>
        </button>
        <button className="bg-[#1DA1F2] p-2 rounded-full">
          <a href={props.gitHub}>
            <FaGithub color="white" />
          </a>
        </button>
        <button className="bg-[#1DA1F2] p-2 rounded-full">
          <a href={props.linkedIn}>
            <FaLinkedinIn color="white" />
          </a>
        </button>
      </div>
      <h2 className="text-md">{props.name}</h2>
      <p className="text-sm font-semibold">{props.designation}</p>
    </div>
  );
}

Member.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  faceBook: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

export default Member;
