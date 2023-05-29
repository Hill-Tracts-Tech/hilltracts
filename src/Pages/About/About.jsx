import { about, mission, vision } from "./aboutData";
import logo from "../../../public/Logo1.svg";
import { services } from "../ServiceDetails/ServiceData";
import '../../styles/styles.css'
const About = () => {
  return (
    <>
      <div className="w-full h-[300px] relative">
        <h1 className="absolute top-[37%] left-[41%] text-4xl uppercase font-bold text-white">
          About Us
        </h1>
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/GPBrF99/aboutus.png"
          alt="Banner"
        />
      </div>
      <div className="max-w-[90%] mx-auto mb-10">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap mb-12 mt-16">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
                <img src={logo} className="w-full h-[350px]" alt="Louvre" />
                <a href="#">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                </a>
              </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4 capitalize">What we do?</h3>
              <p className="text-gray-500 mb-6 text-justify">
                {about.slice(0, 582)}
              </p>
              <p className="text-gray-500 mb-3 text-justify">
                {about.slice(583, 1210)}
              </p>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="flex justify-between items-center gap-4">
            <div className="border-2 rounded-md shadow-lg opacity-75 p-4 common">
              <h3 className="text-xl font-bold mb-2 sm-12">Our Mission</h3>
              <p className="text-justify">{mission}</p>
            </div>
            <div className="border-2 rounded-md shadow-lg opacity-75 p-4 common">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-justify">{vision}</p>
            </div>
          </div>
        </section>
        <div className="">
          <p className="text-blue-600">REASON TO CHOOSE US</p>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            We provide truly prominent IT solutions.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services &&
            services.map((data) => (
              <div
                key={data.id}
                className="p-4 rounded-lg border-2 border-gray-300 shadow-lg opacity-75 hover:shadow-xl cursor-pointer"
              >
                <div className="w-[120px] h-[120px] mx-auto">
                  <img
                    src={data.imgURL}
                    className="w-full h-full mx-auto"
                    alt={data.imgURL}
                  />
                </div>
                <h1 className="text-2xl text-gray-900 font-bold">
                  {data.title}
                </h1>
                <p className="text-gray-900 text-start">
                  {data.description.slice(0, 140)}...
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default About;
