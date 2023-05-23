/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const fullName = form.fullName.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const data = {
      email,
      fullName,
      subject,
      message,
    };
    setContactInfo(data);
  };
  console.log(contactInfo);
  return (
    <div>
      <div className="w-full h-[350px] relative">
        <img
          className="h-full w-full"
          src="https://i.ibb.co/TrgVqrD/5.png"
          alt=""
        />
        <h1 className="text-4xl font-bold text-white absolute top-[140px] left-[619px]">
          Contact Us
        </h1>
      </div>
      <div className="w-2/3 mx-auto mt-4">
        <div>
          <span className="text-md font-bold text-[#1DA1F2]">
            REQUEST A QUOTE
          </span>
          <h3 className="text-2xl text-gray-950 font-bold">
            How May We Help You!
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form- flex my-3 gap-3">
            <input
              name="fullName"
              required
              placeholder="Name *"
              type="text"
              className="w-full h-[35px] rounded-md outline-none border-gray-400 p-2"
            />
            <input
              name="email"
              required
              placeholder="Email *"
              type="email"
              className="w-full h-[35px] rounded-md outline-none border-gray-400 p-2"
            />
          </div>
          <div className="form-">
            <input
              name="subject"
              required
              placeholder="Subject *"
              type="text"
              className="w-full h-[35px] rounded-md outline-none border-gray-400 p-2"
            />
          </div>
          <div className="form- my-3">
            <textarea
              name="message"
              required
              className="textarea w-full h-[140px] outline-none"
              placeholder="Your Message *"
            ></textarea>
          </div>
          <button className="btn bg-[#1DA1F2] rounded-md border-none w-full mb-3 capitalize font-semibold text-[18px] hover:bg-[#15dfdf] focus:outline-none focus:border-none">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
