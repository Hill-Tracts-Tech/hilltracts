/* eslint-disable no-unused-vars */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../../../styles/styles.css";
import { Link } from "react-router-dom";
const BlogAndNew = () => {
  const data = [
    {
      id: 1,
      image:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/blog3.jpg",
      userimage:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/team1.jpg",
      title: "Networking",
      blog: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",
      comment: "2",
      date: "23,4,2023",
    },
    {
      id: 2,
      image:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/blog2.jpg",
      userimage:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/team2.jpg",
      title: "web development",
      blog: "We specialize in creating dynamic and responsive websites tailored to your unique needs. Our expert team utilizes the latest web technologies to deliver user-friendly interfaces, seamless navigation, and captivating designs that enhance your online presence.",
      comment: "2",
      date: "23,4,2023",
    },
    {
      id: 3,
      image:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/blog1.jpg",
      userimage:
        "https://urnothemes.com/solute/wp-content/uploads/2023/01/team3.jpg",
      title: "Digital marketing",
      blog: "Reach your target audience and boost your online visibility with our digital marketing services. We offer SEO, social media marketing, and content creation to drive traffic and conversions.",
      comment: "2",
      date: "23,4,2023",
    }
  ];
  return (
    <>
      {/* header */}
      <div className="b-title-outline w-72 mx-auto">
        <div className="text-xl font-semibold text-[#1DA1F2] b-title text-center uppercase ">
          What is Happening
        </div>
      </div>
      {/* header end */}

      <div className="my-10 w-[90%] mx-auto flex md:flex-row-reverse flex-col justify-between items-center gap-6">
        <div className="">
          <h1 className="text-2xl font-bold text-center capitalize  tracking-[6px] font-[cursive]">
            Best News & Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8 items-center">
          {data.map((item) => (
            <div
              key={item?.id}
              className=" card-bordered rounded-lg shadow-xl mt-5 lg:mt-0 md:mt-0 "
            >
              <div className="">
                <img className=" rounded-lg" src={item?.image} alt="" />

                <img
                  className="rounded-full h-12 ml-3 mt-[-30px]  card-bordered "
                  src={item?.userimage}
                  alt=""
                />
                <div className="p-2">
                  <Link
                    to="/blog-details"
                    className="text-xl font-semibold my-4"
                  >
                    {item?.title}
                  </Link>
                  <p className=" text-left cursor-pointer">{item?.blog.slice(0, 70)} <span title={item.blog}>...</span> </p>
                  <div className="mt-4">
                    <Link
                      to="/blog-details"
                      className="font-semibold hover:text-[#1DA1F2]"
                    >
                      Read More
                      <BsArrowRight size={20} className="inline-block ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogAndNew;
