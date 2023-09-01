import React from "react";
import "./heroStyle.css";
import HeroImg from "../../assets/HeroImage.jpg";
import YogeshShrivasResume from "../../assets/YogeshShrivasResume.pdf";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constantData";
import HeroAnimation from "./HeroAnimation";
const HeroSection = () => {
  return (
    <>
      <div id="About">
        <div className="heroContainer w-full flex justify-center relative  px-[16px] py-[66px] lg:px-[30px] lg:py-[80px]  z-1">
          <div className="bgAnimation absolute justify-center flex top-0 bottom-0 left-0 w-full  truncate lg:px-[30px] lg:justify-end ">
            <HeroAnimation />
          </div>
          <div className="innerContainer flex flex-col relative w-full max-w-[1100px] lg:justify-between lg:items-center lg:flex-row">
            <div className="left flex order-2 mb-[30px]  flex-col items-center w-full lg:order-1 lg:items-start">
              <div className="title w-full flex text-[#F2F3F4] text-[40px] font-[700] mb-[8px] justify-center text-center leading-[48px] lg:text-[50px] lg:leading-[68px] lg:justify-start lg:text-left">
                Hi, i am <br />
                {Bio.name}
              </div>
              <div className="textLoop flex text-[#F2F3F4] gap-[12px] text-[22px mb-[16] font-[600] leading-[48px] lg:text-[32px] lh:leading-[68px] lg:text-left">
                I am a
                <span className="pointer text-[#854CE6] ">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="description text-[#b1b2b3] flex text-center text-[16px] leading-[32px] mb-[42px] lg:text-[20px] lg:leading-[32px] lg:text-left">
                {Bio.description}
              </div>
              <div className="resumeBtn  py-[12px] text-[18px]">
                <a href={YogeshShrivasResume} target="_blank">
                  Check Resume
                </a>
              </div>
            </div>
            <div className="right sm:mb-[60px] lg:mb-[0px] flex order-1 justify-center mb-[px]  w-full lg:order-2 lg:justify-end lg:items-center gap-[12px]">
              <img
                src={HeroImg}
                alt="hero-image"
                className="img relative flex w-full max-w-[280px] max-h-[280px] rounded-[50%] border-[2px] border-[#854CE6] md:max-w-[400px] md:max-h-[400px] lg:max-w-[400px] lg:max-h-[400px] lg:items-center "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
