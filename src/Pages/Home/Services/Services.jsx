import { FaConnectdevelop } from "react-icons/fa";
import { BsArrowRight, BsCodeSlash, BsDatabaseCheck } from "react-icons/bs";
import { GiCyberEye } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import "../../../styles/styles.css"
const Services = () => {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <div className="s-title-outline w-48 mx-auto my-5">
        <h2 className="text-lg font-semibold text-orange-400 s-title text-center uppercase">
          Services
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize">
          We offer all types of IT solution services
        </h1>
      </div>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3 mt-8">
        <div className="service-card bg-gray-100 p-4 rounded-md">
          <div className="content">
            <div className=" flex justify-start items-center gap-2">
              <div className="icon">
                <FaConnectdevelop size={23} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold capitalize">
                  Software development
                </h2>
              </div>
            </div>
            <div className="ml-[30px] text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, eius.lorem10
              </p>

              <button className="mt-5">
                Read More{" "}
                <BsArrowRight className="text-orange-400 inline-block" />
              </button>
            </div>
          </div>
        </div>
        <div className="service-card bg-gray-100 p-4 rounded-md">
          <div className="content">
            <div className=" flex justify-start items-center gap-2">
              <div className="icon">
                <GiCyberEye size={23} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold capitalize">Cyber Security</h2>
              </div>
            </div>
            <div className="ml-[30px] text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, eius.lorem10
              </p>

              <button className="mt-5">
                Read More{" "}
                <BsArrowRight className="text-orange-400 inline-block" />
              </button>
            </div>
          </div>
        </div>
        <div className="service-card bg-gray-100 p-4 rounded-md">
          <div className="content">
            <div className=" flex justify-start items-center gap-2">
              <div className="icon">
                <BsDatabaseCheck size={23} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold capitalize">Data recovery</h2>
              </div>
            </div>
            <div className="ml-[30px] text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, eius.lorem10
              </p>

              <button className="mt-5">
                Read More{" "}
                <BsArrowRight className="text-orange-400 inline-block" />
              </button>
            </div>
          </div>
        </div>
        <div className="service-card bg-gray-100 p-4 rounded-md">
          <div className="content">
            <div className=" flex justify-start items-center gap-2">
              <div className="icon">
                <BsCodeSlash size={23} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold capitalize">
                  Web Development
                </h2>
              </div>
            </div>
            <div className="ml-[30px] text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, eius.lorem10
              </p>

              <button className="mt-5">
                Read More{" "}
                <BsArrowRight className="text-orange-400 inline-block" />
              </button>
            </div>
          </div>
        </div>
        <div className="service-card bg-gray-100 p-4 rounded-md">
          <div className="content">
            <div className=" flex justify-start items-center gap-2">
              <div className="icon">
                <MdBusiness size={23} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold capitalize">
                  Business consulting
                </h2>
              </div>
            </div>
            <div className="ml-[30px] text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, eius.lorem10
              </p>

              <button className="mt-5">
                Read More{" "}
                <BsArrowRight className="text-orange-400 inline-block" />
              </button>
            </div>
          </div>
        </div>
        <div className="service-card bg-gray-100 p-4 rounded-md">
          <div className="content">
            <div className=" flex justify-start items-center gap-2">
              <div className="icon">
                <SiSimpleanalytics size={23} className="text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold capitalize">data analysis</h2>
              </div>
            </div>
            <div className="ml-[30px] text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, eius.lorem10
              </p>

              <button className="mt-5">
                Read More{" "}
                <BsArrowRight className="text-orange-400 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
