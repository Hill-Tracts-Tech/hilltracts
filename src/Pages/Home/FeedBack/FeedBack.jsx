/* eslint-disable no-unused-vars */
import "../../../styles/styles.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { clientReviewData } from "./ClientReviewData";
import "./FeedBack.css";
import comma from'../../../assets/icon/comma.webp'
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
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3 mt-8">
        {clientReviewData &&
          clientReviewData.map((data, i) => (
            <div key={data.id}>
              {i % 2 === 0 ? (
              <div>
              <div
                key={data.id}
                className="cursor-pointer shadow-lg bg-[#b9e2fc] p-4  rounded-lg flex flex-col justify-center items-center"
              >
                 <div className="mt-[-60px]">
                 <img
                   className="w-24 h-24 rounded-full card-bordered"
                   src={data.profile}
                   alt={data.profile}
                 />
               </div>
                <div className="mt-3 flex gap-2">
                  <img src={comma} className="w-4 h-4 rotate-180" alt="" />
                  <p>{data.review}</p>
              
                  <img src={comma} className="w-4 h-4" alt="" />
                  </div>
                  <div className="flex justify-start items-center gap-4">
                    <div >
                      <h3 className="text-xl mt-2 text-center font-semibold text-gray-900">
                        {data.name}
                      </h3>
                      <div className="flex justify-center items-center gap-2 ">
                        {data.rating == 1 && (
                          <>
                            <BsStarFill className="text-[#fdeb64] text-sm" />
                            <BsStar className="text-sm"/>
                            <BsStar className="text-sm"/>
                            <BsStar className="text-sm"/>
                            <BsStar className="text-sm"/>
                          </>
                        )}
                        {data.rating == 2 && (
                          <>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm" />
                            <BsStar className="text-sm"/>
                            <BsStar className="text-sm"/>
                            <BsStar className="text-sm"/>
                          </>
                        )}
                        {data.rating == 3 && (
                          <>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill  className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStar className="text-sm"/>
                            <BsStar className="text-sm"/>
                          </>
                        )}
                        {data.rating == 4 && (
                          <>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStar className="text-sm"/>
                          </>
                        )}
                        {data.rating == 5 && (
                          <>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                            <BsStarFill className="text-[#fdeb64] text-sm"/>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                
              </div>
              <div className="triangle"></div>
            </div>
              ) : (
                <div>
                  <div
                    key={data.id}
                    className="cursor-pointer shadow-lg bg-[#b9e2fc] p-4  rounded-lg flex flex-col justify-center items-center"
                  >
                     <div className="mt-[-60px]">
                     <img
                       className="w-24 h-24 rounded-full card-bordered"
                       src={data.profile}
                       alt={data.profile}
                     />
                   </div>
                    <div className="mt-3 flex gap-2">
                      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/inverted-commas-1-648947.png" className="w-4 h-4 rotate-180" alt="" />
                      <p>{data.review}</p>
                  
                      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/inverted-commas-1-648947.png" className="w-4 h-4" alt="" />
                      </div>
                      <div className="flex justify-start items-center gap-4">
                        <div >
                          <h3 className="text-xl mt-2 text-center font-semibold text-gray-900">
                            {data.name}
                          </h3>
                          <div className="flex justify-center items-center gap-2 ">
                            {data.rating == 1 && (
                              <>
                                <BsStarFill className="text-[#fdeb64] text-sm" />
                                <BsStar className="text-sm"/>
                                <BsStar className="text-sm"/>
                                <BsStar className="text-sm"/>
                                <BsStar className="text-sm"/>
                              </>
                            )}
                            {data.rating == 2 && (
                              <>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm" />
                                <BsStar className="text-sm"/>
                                <BsStar className="text-sm"/>
                                <BsStar className="text-sm"/>
                              </>
                            )}
                            {data.rating == 3 && (
                              <>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill  className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStar className="text-sm"/>
                                <BsStar className="text-sm"/>
                              </>
                            )}
                            {data.rating == 4 && (
                              <>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStar className="text-sm"/>
                              </>
                            )}
                            {data.rating == 5 && (
                              <>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                                <BsStarFill className="text-[#fdeb64] text-sm"/>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    
                  </div>
                  <div className="triangle"></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeedBack;
