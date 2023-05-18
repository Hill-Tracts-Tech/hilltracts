import { services } from "./ServiceData";
import { BsBox } from "react-icons/bs";
// import '../../styles/styles.css'

const ServiceDetails = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      {services.map((service, i) => (
        <div
          key={i}
          className={
            (i + 1) % 2 == 0
              ? "flex justify-between items-center flex-row-reverse my-3"
              : "flex justify-between items-center my-3 single-service"
          }
        >
          <div className="w-1/2 p-4">
            <img className="w-full" src={service.imgURL} alt={service.title} />
          </div>
          <div className="w-1/2 p-4">
            <BsBox size={50} className="s-icon hover:rotate-180" />
            <h2 className="text-start text-3xl font-bold my-5">
              {service.title}
            </h2>
            <p className="text-justify">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;
