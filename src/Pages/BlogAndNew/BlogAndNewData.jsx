import { GoDeviceMobile } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";

import { SiBmcsoftware, SiBigcommerce, } from "react-icons/si";
import '../../styles/styles.css'
export const blogAndNew = [
  {
    id: 1,
    imgURL:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/blog3.jpg",
      title: "Networking",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      comment: "2",
      date: "23,4,2023",
    icon: <CgWebsite size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "With the exponential growth of mobile devices, having a mobile app is essential for businesses. Our skilled developers create intuitive and feature-rich mobile applications for iOS and Android platforms, ensuring seamless user experiences and optimal performance.",
    imgURL: "https://i.ibb.co/VmCkdts/Mobile-App.png",
    icon: <GoDeviceMobile size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "We offer custom software development services to streamline your business operations and enhance productivity. Our talented developers build robust and scalable software solutions tailored to your specific requirements, helping you automate tasks, manage data effectively, and improve overall efficiency.",
    imgURL: "https://i.ibb.co/cvdpKGq/software-Dev.png",
    icon: <SiBmcsoftware size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description:
      "In today's digital marketplace, having a robust e-commerce platform is crucial for businesses to thrive. We provide end-to-end e-commerce solutions, including online store development, secure payment gateways, inventory management systems, and user-friendly interfaces that optimize your online sales and customer experiences.",
    imgURL: "https://i.ibb.co/9yzV8QL/E-commerce.png",
    icon: <SiBigcommerce size={50} className="s-icon hover:rotate-180" />,
  },

];
