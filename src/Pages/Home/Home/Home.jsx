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
  const [cardData, setCardData] = useState();

  console.log("lololo",cardData);
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
        <div className="lg:grid grid-cols-12 flex flex-col-reverse justify-between items-center h-[100%] max-w-[90%] mx-auto">
          <div className=" text-stone-50  text-center flex justify-center items-center lg:col-span-6">
            <div className="px-5">
              {cardData? 
            (  cardData.map(item=><><div key={item?.serviceId}>
              <p className="text-4xl font-semibold mb-4 text-[#9ad8ff]">{item.title}</p>
            <p className="text-xl font-medium">{item.description}</p>
            </div></>))
              :""}
            </div>
          </div>
          <div
            className="lg:col-span-6 py-5 mt-[100px] lg:mt-0 md:mt-[100px]"
            style={{ height: "300px" }}
          >
            <Banner setCardData={setCardData} />
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
      <OurClients />
      <BlogAndNew />
    </div>
  );
};

export default Home;
