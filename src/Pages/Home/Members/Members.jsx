import "react-multi-carousel/lib/styles.css";
import Member from "./Member";
import { productData } from "./data";
export default function Members() {
  const product = productData.map((item, i) => (
    <>
      <Member
        key={i}
        name={item.name}
        url={item.imgURL}
        designation={item.designation}
        description={item.description}
      />
    </>
  ));

  return (
    <div className="App ">
      <div className="max-w-[90%] mx-auto">
        <div className="m-title-outline w-48 mx-auto mt-20">
          <h2 className="text-lg font-semibold text-[#1DA1F2] m-title text-center uppercase">
            Team
          </h2>
        </div>
        <div className="w-1/2 mx-auto">
          <h1 className="text-3xl font-bold text-center capitalize font-[cursive]">
            Our Best Team members
          </h1>
        </div>
        <div className="mt-[-30px]">
          <Member product={product}/>
        </div>
      </div>
    </div>
  );
}
