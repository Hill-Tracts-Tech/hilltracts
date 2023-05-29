import { services } from "./ServiceData";
import '../../styles/styles.css'

const ServiceDetails = () => {
  return (
    <>
      <div className="w-full h-[300px] relative">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/Q8GXTb8/2.png"
          alt="Banner"
        />
        <div className="uppercase absolute text-white font-bold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl">
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
              <div className="md:w-1/2 w-full p-4">
                {service.icon}
                <h2 className="text-start text-3xl font-bold my-5">
                  {service.title}
                </h2>
                <p className="text-justify">{service.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceDetails;
