import "../../../styles/styles.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { clientReviewData } from "./ClientReviewData";
const FeedBack = () => {
  return (
    <div className="max-w-[90%] mx-auto mb-10">
      <div className="f-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] f-title text-center uppercase">
          feedback
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize font-[cursive]">
          What are they saying about company
        </h1>
      </div>
      <div
        className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3 mt-8"
      >
      {clientReviewData &&
        clientReviewData.map((data) => (
            <div
            key={data.id}
              className="cursor-pointer bg-white p-4 custom-hover">
              <div className="flex justify-start items-center gap-4">
                <div>
                  <img
                    className="w-16 h-16"
                    src={data.profile}
                    alt={data.profile}
                  />
                </div>
                <div>
                  <h3 className="text-md text-start font-semibold text-gray-900">
                    {data.name}
                  </h3>
                <div className="flex justify-center items-center gap-2">
                  {
                    data.rating == 1 && (
                      <>
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                      </>)
                  }
                  {
                    data.rating == 2 && (
                      <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                      </>)
                  }
                  {
                    data.rating == 3 && (
                      <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                      </>)
                  }
                  {
                    data.rating == 4 && (
                      <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                      </>)
                  }
                  {
                    data.rating == 5 && (
                      <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                      </>)
                  }
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p>{data.review}</p>
              </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default FeedBack;
