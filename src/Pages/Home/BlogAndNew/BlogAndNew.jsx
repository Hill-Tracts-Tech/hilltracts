/* eslint-disable no-unused-vars */
import React from "react";
import { FaClock, FaComment } from "react-icons/fa";
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
    },
  ];
  return (
    <div className="max-w-[90%] mx-auto mb-10">
      <div className="b-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] b-title text-center uppercase ">
          What is Happening
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize font-[cursive] ">
          Best News & Blog
        </h1>
      </div>
      <div className="lg:flex justify-around gap-8 px-4 mt-[-30px]">
        {data.map((item) => (
          <div key={item?.id} className="">
            <div className="">
              <img className=" rounded-lg" src={item?.image} alt="" />

              <img
                className="rounded-full h-12 ml-3 mt-[-30px]  card-bordered"
                src={item?.userimage}
                alt=""
              />

              <Link to="/blog-details" className="text-xl font-semibold my-4">{item?.title}</Link>
              <p className=" text-left">{item?.blog.slice(0, 70)}.....</p>
              <div className="mt-4">
                <ul className="flex justify-between">
                  <li className="flex gap-2">
                    <FaClock className="text-xl "></FaClock>
                    <span className="mt-[-2px]">{item?.date}</span>
                  </li>
                  <li className="flex gap-3">
                    <FaComment className="text-xl"></FaComment>
                    <span className="mt-[-2px]">{item?.comment} comment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAndNew;
