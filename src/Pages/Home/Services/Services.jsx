/* eslint-disable no-unused-vars */
import { BsArrowRight } from "react-icons/bs";
import "../../../styles/styles.css";
import { Link } from "react-router-dom";
import { serviceData } from "./serviceData";
const Services = () => {
  return (
    <>
      {/* header */}
      <div className=" s-title-outline w-full text-center mt-16">
        <div className="text-2xl font-semibold text-[#1DA1F2] s-title  uppercase w-1/3 mx-auto">
          Services
        </div>
      </div>
      {/* header end */}
      <div className="w-[90%] my-10 mx-auto">
        <div className="flex md:flex-row-reverse flex-col justify-between items-center gap-7">
          <div className="my-5 flex-1">
            <h1 className="text-2xl font-bold text-center capitalize  tracking-[6px] font-[cursive]">
              We offer all types of IT solution services
            </h1>
          </div>
          <div className="services grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-3">
            {serviceData &&
              serviceData.map((data, i) => (
                <div key={data.id} className="pl-[3px]">
                  {i % 2 === 0 ? (
                    <div
                      className={`service-card p-6  lg:p-4 md:p-4 lg:h-auto h-72 shadow-xl ${data.rounded} card-bordered w-100% lg:w-auto md:w-auto`}
                      style={{ backgroundColor: `${data.bg}` }}
                    >
                      <div className="content ">
                        <div className=" flex justify-start items-center gap-2">
                          <div className="icon text-[#ffffff] ">
                            {data.icon}
                          </div>
                          <div>
                            <h2 className="text-base lg:text-xl font-bold capitalize">
                              {data.title}
                            </h2>
                          </div>
                        </div>
                        <div className="ml-[30px] text-start ">
                          <p>{data.description.slice(0, 120)}...</p>

                          <Link
                            id={data.serviceId}
                            to="/servicesDetails"
                            className="mt-5 font-semibold text-sm  lg:text-base"
                          >
                            Explore More{" "}
                            <BsArrowRight className="text-[#ffffff] inline-block" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`service-card p-6  lg:p-4 md:p-4 lg:h-auto h-72 ${data.rounded} shadow-xl w-100% lg:w-auto md:w-auto card-bordered`}
                      style={{ backgroundColor: `${data.bg}` }}
                    >
                      <div className="content">
                        <div className=" flex justify-start items-center gap-2">
                          <div className="icon text-[#ffffff] ">
                            {data.icon}
                          </div>
                          <div>
                            <h2 className="text-base lg:text-xl font-bold capitalize">
                              {data.title}
                            </h2>
                          </div>
                        </div>
                        <div className="ml-[30px] text-start text-sm  lg:text-base">
                          <p>{data.description.slice(0, 120)}...</p>

                          <Link
                            id={data.serviceId}
                            to="/servicesDetails"
                            className="mt-5 font-semibold "
                          >
                            Explore More{" "}
                            <BsArrowRight className="text-[#ffffff] inline-block " />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
