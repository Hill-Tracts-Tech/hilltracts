/* eslint-disable no-unused-vars */
import Banner from "../Banner/Banner";
import BlogAndNew from "../BlogAndNew/BlogAndNew";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
// import TeamMembers from "../TeamMembers/TeamMembers";
import FeedBack from "../FeedBack/FeedBack";
import Members from "../Members/Members";
import OurClients from "../OurClients/OurClients";
import backgroundImage from "../../../assets/background.png";
import bubble from "../../../assets/bubble.png";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  // const [cardData, setCardData] = useState();

  return (
    <div>
      <div
        className="w-full h-[calc(110vh-0rem)] "
        style={{
          background: `url(${backgroundImage})`,
          backgroundRepeat: "",
          backgroundSize: "",
          marginTop: "-100px",
        }}
      >
        <div className="mt-[-350px] lg:mt-0 md:mt-[-400px] pb-16 lg:pb-0 lg:grid  grid-cols-12 flex flex-col-reverse lg:justify-between items-center h-[100%] max-w-[90%] mx-auto">
          <div className=" text-stone-50  text-center flex justify-center items-center lg:col-span-6">
            <div className="px-5 ">
              <div>
                <p className="text-4xl font-semibold mb-4 text-[#9ad8ff]">
                  What We Do?
                </p>
                <p className="text-sm lg:text-xl font-medium text-center lg:text-left">
                  Hill Tracts Tech is proud to be the first technology company
                  operating in the Chittagong Hill Tracts (CHT) region of
                  Bangladesh. Our establishment marks a significant milestone in
                  bringing cutting-edge technological solutions and services to
                  this unique and vibrant region.The Chittagong Hill Tracts,
                  with its stunning landscapes, rich cultural heritage, and
                  diverse indigenous communities, has long been recognized as a
                  treasure trove of natural beauty.However, the region has also
                  faced its share of challenges, including limited access to
                  modern technology and digital resources. 
                  hills.
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:col-span-6 py-5 mt-[100px] lg:mt-0 md:mt-[100px]"
            // style={{ height: "300px" }}
          >
            <Banner />
          </div>
        </div>
        <div className="bubbles mb-[-60px]">
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
          <img src={bubble} alt="" />
        </div>
      </div>

      <Services />
      <Portfolio />
      <Members />
      <FeedBack />
      {/* <OurClients /> */}
      <BlogAndNew />
    </div>
  );
};

export default Home;
