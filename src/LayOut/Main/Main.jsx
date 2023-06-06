import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollToTopComponent from "../../Components/Scroll/ScrollToTop";
const Main = () => {
  return (
   <div className="dark:bg-gray-700">
     <ScrollToTopComponent>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </ScrollToTopComponent>
   </div>
  );
};

export default Main;

// bg-[#D8D3D3]
