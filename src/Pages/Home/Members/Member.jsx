import PropTypes from "prop-types";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../../styles/styles.css";
import "./style.css";

function Member(props) {
  return (
    <div className="card social-icons-wrapper">
      <img className="member-img" src={props.url} alt="product image" />
      <div className="flex justify-center z-0 items-center gap-2 social-icons">
        <button className="bg-orange-500 p-2 rounded-full">
          <a href={props.faceBook}>
            <FaFacebookF color="white" />
          </a>
        </button>
        <button className="bg-orange-500 p-2 rounded-full">
          <a href={props.gitHub}>
            <FaGithub color="white" />
          </a>
        </button>
        <button className="bg-orange-500 p-2 rounded-full">
          <a href={props.linkedIn}>
            <FaLinkedinIn color="white" />
          </a>
        </button>
      </div>
      <h2>{props.name}</h2>
      <p className="designation">{props.designation}</p>
      <p>{props.description}</p>
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
