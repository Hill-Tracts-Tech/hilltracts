import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Member from "./Member";
import { productData, responsive } from "./data";

export default function Members() {
  const product = productData.map((item, i) => (
    <Member
      key={i}
      name={item.name}
      url={item.imageurl}
      designation={item.designation}
      description={item.description}
    />
  ));

  return (
    <div className="App max-w-[90%] mx-auto">
      <Carousel
        showDots={false}
        responsive={responsive}
        itemClass="carousel-item-padding-0-px"
      >
        {product}
      </Carousel>
    </div>
  );
}
