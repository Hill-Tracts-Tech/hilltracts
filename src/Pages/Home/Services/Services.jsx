/* eslint-disable no-unused-vars */
import { BsArrowRight } from "react-icons/bs";
import "../../../styles/styles.css";
import { Link } from "react-router-dom";
import { serviceData } from "./serviceData";
const Services = () => {
  return (
    <div className=" mb-10  px-9 pb-8   mt-20 pt-9">
         <div className=" s-title-outline  lg:w-64 mx-auto  text-center mt-16 lg:mt-0 ">
            <h2 className=" ml-[-50px] lg:ml-0 md:ml-0 w-64 lg:text-2xl md:text-2xl font-semibold text-[#1DA1F2] s-title  uppercase md:mb-16 ">
              Services
            </h2>
          </div>
          <div className="pl-9 lg:pl-0 md:pl-0 lg:hidden block md:hidden">
            <h1 className="lg:text-4xl md:text-4xl font-bold text-left capitalize  tracking-[6px] font-[cursive]">
              We offer all types of IT solution services
            </h1>
          </div>
      <div className="max-w-[90%] mx-auto grid grid-cols-12">
        <div className=" col-span-8 services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between gap-3  md:pb-20 lg:pb-0 mt-[-30px]">
          {serviceData &&
            serviceData.map((data, i) => (
              <div key={data.id} className="pl-[3px]">
                {i % 2 === 0 ? (
                  <div className={`service-card p-6  lg:p-4 md:p-4 lg:h-auto h-72 shadow-xl ${data.rounded} card-bordered w-[280px] lg:w-auto md:w-auto`} style={{backgroundColor:`${data.bg}`}}>
                    <div className="content ">
                      <div className=" flex justify-start items-center gap-2">
                        <div className="icon text-[#ffffff] ">{data.icon}</div>
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
                  <div className={`service-card p-6  lg:p-4 md:p-4 lg:h-auto h-72 ${data.rounded} shadow-xl w-[280px] lg:w-auto md:w-auto card-bordered`} style={{backgroundColor:`${data.bg}`}}>
                    <div className="content">
                      <div className=" flex justify-start items-center gap-2">
                        <div className="icon text-[#ffffff] ">{data.icon}</div>
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
        <div className=" col-span-4 text-center lg:flex hidden md:flex flex-col justify-center items-center ml-6">
       
          <div className="">
            <h1 className="lg:text-4xl md:text-4xl font-bold text-left capitalize w-20 tracking-[6px] font-[cursive]" style={{lineHeight:"55px"}}>
              We offer all types of IT solution services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
