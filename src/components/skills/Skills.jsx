import React from "react";
import "./skillStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skills } from "../../data/constantData";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 1100 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1100, min: 940 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 940, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div id="Skills">
        <div className="Container flex flex-col items-center w-full bg=[#000000] z-1 mt-10">
          <div className="title text-center text-[32px] lg:text-[42px] font-[600] text-[#F2F3F4] mt-[12px] lg:mt-[20px]">
            Skills
          </div>
          <div className="desc max-w-[600px] text-[16px] font-[500] leading-[32px] text-center mt-[12px] text-[#b1b2b3]  lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, at
            fugiat optio consequuntur error expedita?
          </div>
          <div className="innerContainer w-full max-w-[1100px] px-[50px] py-[30px] mt-[30px]">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              className="skillList"
            >
              {skills.map((items, index) => (
                <div
                  key={index}
                  className="skillItems text-center flex flex-col justify-center items-center text-[#F2F3F4] text-[20px] gap-3 "
                >
                  <img
                    src={items.image}
                    alt=""
                    className="skillImage w-[100px] "
                  />
                  {items.name}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

{
  /* <div className="title flex justify-center">Skills</div>
        <div className="description flex justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          nam?
        </div>
        <div className="SkillContainer ">
          <Carousel responsive={responsive} className="">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        </div> */
}
