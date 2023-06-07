import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Modal = ({ modalData, setModalOpen }) => {
  console.log(modalData);
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex z-50 items-center justify-center bg-[#252A2F] bg-opacity-60">
      <div className="w-full md:w-[80%] mx-auto dark:bg-[#252A2F] bg-[#bfd6d8] p-5 shadow-lg rounded-md relative dark:text-[#fff] text-gray-700">
        <button
          onClick={() => setModalOpen(false)}
          className="absolute right-6 top-3 font-bold text-xl hover:bg-red-600 hover:text-white p-2 h-8 w-8 flex justify-center items-center rounded-sm"
        >
          X
        </button>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-[250px] md:h-[250px] [180px] h-[180px] border-solid border-4 lg:border-2 border-indigo-600 rounded-md">
            <img
              className="w-full h-full rounded-md object-fill"
              src={modalData.imgURL}
              alt="image here"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-[25px] dark:text-[#ced5dc] text-[#252A2F]">
              {modalData.name}
            </h1>
            <h3 className="font-semibold text-[20px] text-blue-700">
              {modalData.designation}
            </h3>
            <h2 className="font-bold text-xl my-2">Bio</h2>
            <p className="text-justify font-[400] leading-7">
              {modalData.description}
            </p>
            <div className="flex justify-start items-center mt-5">
              <Link
                target={"_blank"}
                to={modalData.facebook}
                className="flex rounded-full h-10 w-10 cursor-pointer"
              >
                <FaFacebookF className="text-[#1da1f2]" />
              </Link>
              <a
                target={"_blank"}
                to={modalData.github}
                className="flex rounded-full h-10 w-10 cursor-pointer"
              >
                <FaGithub className="text-[#1da1f2]" />
              </a>
              <a
                target={"_blank"}
                to={modalData.linkedIn}
                className="flex rounded-full h-10 w-10 cursor-pointer"
              >
                <FaLinkedinIn className="text-[#1da1f2]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalData: PropTypes.object,
  setModalOpen: PropTypes.func,
};

export default Modal;
