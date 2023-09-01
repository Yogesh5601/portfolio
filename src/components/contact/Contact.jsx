import React, { useState } from "react";
import "./contactStyle.css"
const Contact = () => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
       ... prevValue,
        [name]: value,
      };
    });
  };

  const submit = (event) => {
    event.preventDefault()
    setInput({
      email: "",
      name: "",
      subject: "",
      message: "",
    });
  }
  return (
    <div id="Contact">
      <div className="contact flex flex-col justify-center relative z-1 items-center ">
        <div className="wrapper relative flex flex-col justify-between items-center w-full max-w-[1350px] pb-[80px]">
          <div className="title text-[42px] text-center mt-12 lg:mt-[20px] text-[#f2f3f4] font-[600]">
            Contact
          </div>
          <div className="desc max-w-[600px] text-[16px] font-[400] leading-[32px] text-center mt-[12px] text-[#b1b2b3]  lg:text-[18px]">
            Feel free to reach out to me for any questions or opportunities!
          </div>
          <div className="contactForm w-[95%] max-w-[600px] flex flex-col shadow-[0_4px_24px_rgba(23,92,230,0.15)] bg-[#171721] p-[32px] rounded-[16px] mt-[28px] gap-[12px]">
            <div className="contactTitle text-[24px] mb-[6px] font-[600] text-[#f2f3f4]">
              Email Me 🚀
            </div>
            <form action="" className="">
              <input
                type="email"
                className="flex-1 w-full mt-3 text-[#ffff] bg-transparent border-[1px] border-[solid] text-[18px] rounded-[12px] py-[12px] px-[16px] outline-none"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Your Email"
              />

              <input
                type="text"
                className="flex-1 w-full mt-3 text-[#ffff] bg-transparent border-[1px] border-[solid] text-[18px] rounded-[12px] py-[12px] px-[16px] outline-none"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Your Name"
              />

              <input
                type="text"
                className="flex-1 w-full mt-3 text-[#ffff] bg-transparent border-[1px] border-[solid] border-[#b1b2b3] text-[18px] rounded-[12px] py-[12px] px-[16px] outline-none"
                name="subject"
                value={input.subject}
                onChange={handleChange}
                placeholder="Subject"
              />

              <textarea
                className="flex-1 w-full mt-3 text-[#ffff] bg-transparent border-[1px] border-[solid] border-[#b1b2b3] text-[18px] outline-none rounded-[12px] py-[12px] px-[16px]"
                name="message"
                value={input.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              <button className="btn w-full text-center rounded-[12px] mt-[5px] py-[13px] px-[16px] text-[18px] border-none font-[600]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
