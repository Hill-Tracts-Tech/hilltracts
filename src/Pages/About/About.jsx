import { about, mission, vision } from "./aboutData";
import logo from "../../../public/Logo1.svg";
import { services } from "../ServiceDetails/ServiceData";
import "../../styles/styles.css";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Hill Tracts Tech</title>
        <link rel="canonical" href="https://hilltractstech.com/about" />
      </Helmet>
      <div className="w-full h-[500px] relative text-center mt-[-100px]">
        <img
          className="w-full h-full object-cover mt-[-100px]"
          src="https://i.ibb.co/GPBrF99/aboutus.png"
          alt="Banner"
        />
        <div className="absolute text-white font-bold top-[59.5%] left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl uppercase">
          About Us
        </div>
      </div>
      <div className="max-w-[90%] mx-auto mb-10">
        <section className="text-gray-800">
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
              <h3 className="text-2xl font-bold mb-4 capitalize dark:text-gray-400">
                What we do?
              </h3>
              <p className="text-gray-500 mb-6 text-justify dark:text-gray-300">
                {about.slice(0, 582)}
              </p>
              <p className="text-gray-500 mb-3 text-justify dark:text-gray-300">
                {about.slice(583, 1210)}
              </p>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4">
            <div className="border-2 rounded-md shadow-lg opacity-75 p-4 common card-bordered">
              <h3 className="text-xl font-bold mb-2 sm-12 dark:text-gray-300">
                Our Mission
              </h3>
              <p className="text-justify dark:text-white">{mission}</p>
            </div>
            <div className="border-2 rounded-md shadow-lg opacity-75 p-4 common card-bordered">
              <h3 className="text-xl font-bold mb-2 dark:text-gray-400">
                Our Vision
              </h3>
              <p className="text-justify dark:text-white">{vision}</p>
            </div>
          </div>
        </section>
        <div className="">
          <p className="text-blue-600">REASON TO CHOOSE US</p>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-400 my-5">
            We provide truly prominent IT solutions.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services &&
            services.map((data) => (
              <div
                key={data.id}
                className="p-4 rounded-lg border-2  shadow-lg opacity-75 hover:shadow-xl cursor-pointer"
              >
                <div className="w-[120px] h-[120px] mx-auto">
                  <img
                    src={data.imgURL}
                    className="w-full h-full mx-auto"
                    alt={data.imgURL}
                  />
                </div>
                <h1 className="text-2xl text-gray-900 font-bold dark:text-gray-400">
                  {data.title}
                </h1>
                <p className="text-gray-900 text-start dark:text-white">
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
