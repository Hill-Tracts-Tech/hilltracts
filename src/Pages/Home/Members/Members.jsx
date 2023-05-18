import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Member from "./Member";
import { productData, responsive } from "./data";
import ModalMember from "./ModalMember";

export default function Members() {
  const product = productData.map((item, i) => (
    <>
      <Member
        key={i}
        name={item.name}
        url={item.imageurl}
        designation={item.designation}
        description={item.description}
      />
    </>
  ));

  return (
    <div className="App max-w-[90%] mx-auto">
      <div className="m-title-outline w-48 mx-auto my-5">
        <h2 className="text-lg font-semibold text-[#1DA1F2] m-title text-center uppercase">
          Team
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize">
          Our Best Team members
        </h1>
      </div>
      <Carousel
        showDots={false}
        responsive={responsive}
        itemClass="carousel-item-padding-0-px"
      >
        {product}
      </Carousel>
      <ModalMember />
    </div>
  );
}
