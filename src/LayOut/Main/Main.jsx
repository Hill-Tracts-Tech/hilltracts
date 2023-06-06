import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollToTopComponent from "../../Components/Scroll/ScrollToTop";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="dark:bg-gray-700">
          <ScrollToTopComponent>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </ScrollToTopComponent>
        </div>
      )}
    </>
  );
};

export default Main;

// bg-[#D8D3D3]
