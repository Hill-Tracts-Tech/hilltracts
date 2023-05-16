import "../../../styles/styles.css";
import { BsStarFill, BsStar } from "react-icons/bs";
const FeedBack = () => {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <div className="f-title-outline w-48 mx-auto my-5">
        <h2 className="text-lg font-semibold text-orange-400 f-title text-center uppercase">
          feedback
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize">
          What are they saying about company
        </h1>
      </div>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3 mt-8">
        <div className="cursor-pointer bg-white p-4 custom-hover">
          <div className="flex justify-start items-center gap-4">
            <div>
              <img
                className="w-16 h-16"
                src="https://i.ibb.co/s1nTTSR/talimul.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-md font-semibold text-gray-900">UserName</h3>
              <span>Sub-title</span>
              <div className="flex justify-center items-center gap-2">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>feedback description</p>
          </div>
        </div>
        <div className="cursor-pointer bg-white p-4 custom-hover">
          <div className="flex justify-start items-center gap-4">
            <div>
              <img
                className="w-16 h-16"
                src="https://i.ibb.co/s1nTTSR/talimul.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-md font-semibold text-gray-900">UserName</h3>
              <span>Sub-title</span>
              <div className="flex justify-center items-center gap-2">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>feedback description</p>
          </div>
        </div>
        <div className="cursor-pointer bg-white p-4 custom-hover">
          <div className="flex justify-start items-center gap-4">
            <div>
              <img
                className="w-16 h-16"
                src="https://i.ibb.co/s1nTTSR/talimul.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-md font-semibold text-gray-900">UserName</h3>
              <span>Sub-title</span>
              <div className="flex justify-center items-center gap-2">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>feedback description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
