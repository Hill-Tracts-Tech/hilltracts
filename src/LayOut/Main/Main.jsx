import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollToTopComponent from "../../Components/Scroll/ScrollToTop";
const Main = () => {
  return (
    <ScrollToTopComponent>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </ScrollToTopComponent>
  );
};

export default Main;

// bg-[#D8D3D3]
