import React from "react";
import "./portfolioStyle.css";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constantData";
import { useState } from "react";
import EducationCard from "../cards/EducationCard";
import CertificateCard from "../cards/CertificateCard";

const Portfolio = () => {
  const [toggle, setToggle] = useState(1);

  const updataToggle = (id) => {
    setToggle(id);
  };
  return (
    <>
      <div id="Portfolio">
        <div className="portfoliocontainer w-full flex flex-col justify-center items-center mt-14">
          <div className="wrapper w-full max-w-[1350px] pt-[10px] pb-[100px] gap-[12px] relative flex flex-col  justify-center items-center">
            <div className="title text-[#F2F3F4] text-[32px] font-[600] aext-center mt-[12px]  lg:text-[32px] lg:mt-[20px]">
              Portfolio
            </div>
            <div className="desc max-w-[600px] text-[16px] font-[400] leading-[32px] text-center mt-[12px] text-[#b1b2b3]  lg:text-[18px] lg:mb-5">
              I have worked on a wide range of projects.
               Here are some of my projects.
            </div>
            <div className="tabs mb-9 w-full max-w-[300px] flex justify-center">
              <ul className="flex w-full max-w-[300px] justify-center items  border-2 border-[#854CE6] rounded-[15px]">
                <li
                  className="tabs text-[#854CE6] text-[13px] font-[500] px-4 py-2 cursor-pointer hover:bg-[#854CE6] hover:text-[#F2F3F4] rounded-l-[12px]"
                  onClick={() => updataToggle(1)}
                >
                  Projects
                </li>
                <div className="line w-[5px] bg-[#854CE6]"></div>
                <li
                  className="tabs text-[#854CE6] text-[13px] font-[500] px-4 py-2 cursor-pointer hover:bg-[#854CE6] hover:text-[#F2F3F4] "
                  onClick={() => updataToggle(2)}
                >
                  Education
                </li>
                <div className="line w-[5px] bg-[#854CE6]"></div>
                <li
                  className="tabs w-full text-[#854CE6] text-[13px] font-[500] px-4 py-2 cursor-pointer hover:bg-[#854CE6] hover:text-[#F2F3F4] rounded-r-[12px]"
                  onClick={() => updataToggle(3)}
                >
                  Certificates
                </li>
              </ul>
            </div>
            <div className="projectCard">
              <div className="projects">
                <div
                  className={
                    toggle === 1
                      ? "showContent flex flex-wrap justify-center gap-[20px]"
                      : "hideContent"
                  }
                >
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
              <div className={toggle === 2 ? "showContent" : "hideContent"}>
                <EducationCard />
              </div>
              <div className={toggle === 3 ? "showContent" : "hideContent"}>
                <CertificateCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
