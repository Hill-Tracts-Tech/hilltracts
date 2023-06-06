/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "../../../styles/styles.css";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const BlogAndNews = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch("https://rowopyusay-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [])
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
          {blogs &&
            blogs.map((item) => (
              <div
                key={item?._id}
                className=" card-bordered rounded-lg shadow-xl mt-5 lg:mt-0 md:mt-0 "
              >
                <div className="">
                  <img className=" rounded-lg" src={item?.image} alt="" />

                  <img
                    className="rounded-full h-12 ml-3 mt-[-30px]  card-bordered "
                    src="https://i.ibb.co/gJmbQS0/uhai.jpg"
                    alt=""
                  />
                  <div className="p-2">
                    <Link
                      to="/blog-details"
                      className="text-xl font-semibold my-4"
                    >
                      {item?.title}
                    </Link>
                    <p className=" text-left cursor-pointer">
                      {item.objective}
                      <span title={item.objective}>...</span>{" "}
                    </p>
                    <div className="mt-4">
                      <Link
                        to="/blogs"
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

export default BlogAndNews;
