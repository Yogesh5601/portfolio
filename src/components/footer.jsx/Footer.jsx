import React from 'react'
import { Bio, navLinks } from '../../data/constantData';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <>
      <div className="footerContainer w-full py-[2rem] flex justify-center">
        <div className="wrapper w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-[1rem] text-[#b1b2b3]">
          <div className="logo font-[600] text-[20px] text-[#b1b2b3]">
            Yogesh Shrivas
          </div>
          <div className="navlink w-full max-w-[800px] flex flex-row gap-[1rem] text-center text-[12px] justify-center flex-wrap lg:gap-[2rem]">
            <ul className="flex font-popins">
              {navLinks.map((items, index) => (
                <a
                  target="_blank" href={items.links}
                  key={index}
                  className=" text-[#F2F3F4] hover:text-[#854CE6] my-1 px-4 py-2 block rounded-md text-base font-medium cursor-pointer ease-in-out delay-100"
                >
                  {items.text}
                </a>
              ))}
            </ul>
          </div>
          <div className="socialIcons flex mt-[1rem]">
            <div className="socialIcon inline-block mx-[1rem] text-[1.5rem] text-[#f1f2f3] transition-colors o.2 ease-in-out hover:-translate-y-2 hover:text-[#477bdb]">
              <a target="_blank" href={Bio.linkedin}>
                <LinkedInIcon />
              </a>
            </div>
            <div className="socialIcon inline-block mx-[1rem] text-[1.5rem] text-[#f1f2f3] transition-colors o.2 ease-in-out hover:-translate-y-2 hover:text-[red]">
              <a target="_blank" href={Bio.github}>
                <GitHubIcon />
              </a>
            </div>
            <div className="socialIcon inline-block mx-[1rem] text-[1.5rem] text-[#f1f2f3] transition-colors o.2 ease-in-out hover:-translate-y-2 hover:text-[#e945f5]">
              <a target="_blank" href={Bio.insta}>
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="copyRight mt-[1.5rem] text-[o.9rem] text-[#b1b2b3] text-center">
            &copy; 2023 Yogesh Shrivas. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer