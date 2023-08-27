import { services } from "./ServiceData";
import "../../styles/styles.css";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Hill Tracts Tech</title>
        <link rel="canonical" href="https://hilltractstech.com/about" />
      </Helmet>
      <div className="w-full h-[500px] relative mt-[-100px]">
        <img
          className="w-full h-full object-cover mt-[-100px]"
          src="https://i.ibb.co/Q8GXTb8/2.png"
          alt="Banner"
        />
        <div className="absolute text-white mt-[-25px] font-bold top-[59.5%] lg:left-1/2 md:left-1/2  lg:translate-x-[-50%] lg:translate-y-[-50%] text-4xl uppercase ml-[70px] lg:ml-0 md:ml-0">
          Our Services
        </div>
      </div>
      <div className="max-w-[90%] mx-auto">
        {services &&
          services.map((service, i) => (
            <div
              key={i}
              className={
                (i + 1) % 2 == 0
                  ? "md:flex justify-between items-center flex-row-reverse my-3"
                  : "md:flex justify-between items-center my-3 single-service"
              }
            >
              <div className="md:w-1/2 w-full p-4">
                <img
                  className="w-full"
                  src={service.imgURL}
                  alt={service.imgURL}
                />
              </div>
              <div className="md:w-1/2 w-full p-4 dark:text-white">
                {service.icon}
                <h2 className="text-start text-3xl font-bold my-5 dark:text-gray-400">
                  {service.title}
                </h2>
                <p className="text-justify dark:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceDetails;
