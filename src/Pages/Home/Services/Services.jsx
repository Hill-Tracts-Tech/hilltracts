import { BsArrowRight } from "react-icons/bs";
import "../../../styles/styles.css";
import { Link } from "react-router-dom";
import { serviceData } from "./serviceData";
const Services = () => {
  return (
    <div className="max-w-[90%] mx-auto mb-10">
      <div className="s-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] s-title text-center uppercase">
          Services
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize">
          We offer all types of IT solution services
        </h1>
      </div>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3 mt-[-30px]">
        {serviceData &&
          serviceData.map((data) => (
            <div key={data.id}>
              <div className="service-card bg-gray-100 p-4 rounded-md">
                <div className="content">
                  <div className=" flex justify-start items-center gap-2">
                    <div className="icon">{data.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold capitalize">
                        {data.title}
                      </h2>
                    </div>
                  </div>
                  <div className="ml-[30px] text-start">
                    <p>{data.description.slice(0, 120)}...</p>

                    <Link
                      id={data.serviceId}
                      to="/servicesDetails"
                      className="mt-5"
                    >
                      Read More{" "}
                      <BsArrowRight className="text-[#1DA1F2] inline-block" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
