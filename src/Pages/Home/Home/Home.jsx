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

const Home = () => {
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
        <div className="lg:grid grid-cols-12 flex flex-col-reverse justify-between items-center h-[100%]">
          <div className=" text-stone-50  text-center flex justify-center items-center lg:col-span-6">
            <div>
              <p>Digital Superheroes</p>
              <h1>Digital Superheroes</h1>
              <p className="">
                In the last 12 years, Analyzen evolved from a local
                digital-first marketing company to offering an integrated mix of
                strategy, analytics, creativity, technology, media and
                experience to drive meaningful innovation in communication
                through multi-country presence. With one of the largest client
                portfolios, Analyzen is a true integrated marketing company
                empowered by world class technology team able to offer any
                solution for any brand across different media.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 py-5" style={{ height: "300px" }}>
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
      <OurClients />
      <BlogAndNew />
    </div>
  );
};

export default Home;
