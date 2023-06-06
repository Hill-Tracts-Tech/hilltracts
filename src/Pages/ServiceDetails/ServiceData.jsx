import { GoDeviceMobile } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { FaDigitalOcean } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { GiCyberEye } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { SiBmcsoftware, SiBigcommerce, SiAltiumdesigner } from "react-icons/si";
import '../../styles/styles.css'
export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We specialize in creating dynamic and responsive websites tailored to your unique needs. Our expert team utilizes the latest web technologies to deliver user-friendly interfaces, seamless navigation, and captivating designs that enhance your online presence.",
    imgURL: "https://i.ibb.co/fMqNJw5/web-dev-No-BG.png",
    icon: <CgWebsite size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "With the exponential growth of mobile devices, having a mobile app is essential for businesses. Our skilled developers create intuitive and feature-rich mobile applications for iOS and Android platforms, ensuring seamless user experiences and optimal performance.",
    imgURL: "https://i.ibb.co/2SZm8nJ/Mobile-App-No-BG.png",
    icon: <GoDeviceMobile size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "We offer custom software development services to streamline your business operations and enhance productivity. Our talented developers build robust and scalable software solutions tailored to your specific requirements, helping you automate tasks, manage data effectively, and improve overall efficiency.",
    imgURL: "https://i.ibb.co/z8M1SD1/software.png",
    icon: <SiBmcsoftware size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description:
      "In today's digital marketplace, having a robust e-commerce platform is crucial for businesses to thrive. We provide end-to-end e-commerce solutions, including online store development, secure payment gateways, inventory management systems, and user-friendly interfaces that optimize your online sales and customer experiences.",
    imgURL: "https://i.ibb.co/YRF4dwP/E-commerce-No-BG.png",
    icon: <SiBigcommerce size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "We understand the significance of user experience in driving customer satisfaction and engagement. Our skilled designers create visually appealing and intuitive user interfaces that ensure seamless interactions, smooth navigation, and delightful user experiences across various platforms",
    imgURL: "https://i.ibb.co/PhthRFN/UI-UXNo-BG.png",
    icon: <SiAltiumdesigner size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 6,
    title: "Cloud Computing",
    description:
      "Harnessing the power of cloud computing can significantly enhance your business's scalability, flexibility, and cost-efficiency. We offer cloud consulting, migration, and management services to help you leverage cloud platforms effectively, ensuring data security, reliability, and seamless access from anywhere in the world.",
    imgURL: "https://i.ibb.co/ysQPnmm/Cloud-Computing-No-BG.png",
    icon: <TbCloudComputing size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 7,
    title: "Cyber Security",
    description:
      "In today's increasingly interconnected world, safeguarding your digital assets is of paramount importance. Our cybersecurity experts provide comprehensive solutions to protect your sensitive data from cyber threats, including risk assessments, penetration testing, security audits, and implementation of robust security measures.",
    imgURL: "https://i.ibb.co/ggL54m5/Cyber-No-BG.png",
    icon: <GiCyberEye size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 8,
    title: "IT Consulting",
    description:
      "We offer strategic IT consulting services to help businesses leverage technology effectively and achieve their goals. Our experienced consultants provide tailored advice and solutions to optimize your IT infrastructure, improve processes, and align technology with your business objectives.",
    imgURL: "https://i.ibb.co/wwdZvbz/ITSupportno-BG.png",
    icon: <GrTechnology size={50} className="s-icon hover:rotate-180" />,
  },
  {
    id: 9,
    title: "Digital Marketing",
    description:
      "Reach your target audience and boost your online visibility with our digital marketing services. We offer SEO, social media marketing, and content creation to drive traffic and conversions.",
    imgURL: "https://i.ibb.co/yf1b5L7/digitalmrketing.png",
    icon: <FaDigitalOcean size={50} className="s-icon hover:rotate-180" />,
  },
];
