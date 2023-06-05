/* eslint-disable no-unused-vars */
import Banner from "../Banner/Banner";
import BlogAndNews from "../BlogAndNews/BlogAndNews";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import TeamMembers from "../TeamMembers/TeamMembers";
import FeedBack from "../FeedBack/FeedBack";
import backgroundImage from "../../../assets/background.png";
import bubble from "../../../assets/bubble.png";
import "./Home.css";

const Home = () => {
  // const [cardData, setCardData] = useState();

  return (
    <div>
      <div
        className="w-full sm:h-[100vh] md:h-[calc(110vh-0rem)] "
        style={{
          background: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "",
          marginTop: "-100px",
        }}
      >
        <div className=" flex justify-between items-center h-[100%] max-w-[90%] mx-auto">
         
          <div
            className=" py-5 mt-[70px] md:mt-10 lg:mt-10"
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
      <TeamMembers/>
      <FeedBack />
      <BlogAndNews />
    </div>
  );
};

export default Home;
