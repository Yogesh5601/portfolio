import React, { useEffect, useState } from "react";
import { Bio } from "../../data/constantData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "../../data/constantData";
const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [isopen, setOpen] = useState(false);
  
  useEffect(() => {
    const updadeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updadeWidth);
    updadeWidth();
  }, []);

  
 
  return (
    <>
      <div className="navContainer flex w-full items-center justify-center bg-[rgb(25,25,36)] sticky top-0 z-10">
        {width > 640 ? (
          <nav className=" w-full max-w-[1150px] flex justify-between items-center h-[80px] px-5">
            <div className=" text-[25px] font-bold text-white">
              <a href="#">Portfolio</a>
            </div>
            <ul className="flex font-popins">
              {navLinks.map((items, index) => (
                <a
                  href={items.links}
                  key={index}
                  className=" text-[#F2F3F4] my-1 px-4 py-2 block rounded-md text-base font-medium cursor-pointer ease-in-out delay-100 hover:text-[#854ce6]"
                >
                  {items.text}
                </a>
              ))}
            </ul>
            <div className="Git_btn text-[18px] border-[1.8px] border-solid border-[#854ce6] px-5 py-3 ml-6 rounded-[16px] hover:bg-[#854ce6] hover:text-[#ffff] text-[#854ce6] hover:cursor-pointer">
              <a href={Bio.github} target="_blank">
                Github Profile
              </a>
            </div>
          </nav>
        ) : (
          <>
            {isopen ? (
              <div
                className="flex flex-col w-full  border-3 bg-[rgb(25,25,36)] sticky top-0"
                onClick={() => setOpen(false)}
              >
                <div className="flex justify-between">
                  <div className="flex p-5 text-[25px] font-bold text-white">
                    Portfolio
                  </div>
                  <div className=" flex cursor-pointer text-[25px] p-5 text-[#F2F3F4]">
                    <CloseIcon />
                  </div>
                </div>
                <ul className="flex flex-col justify-start mx-1 mb-5 px-3 font-popins text-[18px] font-normal">
                  {navLinks.map((items, index) => (
                    <a
                      href={items.links}
                      key={index}
                      className=" text-[#F2F3F4] hover:text-white hover:bg-gray-700 my-1 px-4 py-2 block rounded-md text-base font-medium cursor-pointer ease-in-out delay-100"
                    >
                      {items.text}
                    </a>
                  ))}
                </ul>
              </div>
            ) : (
              <div
                className="w-full flex justify-between items-center cursor-pointer sticky top-0"
                onClick={() => setOpen(true)}
              >
                <div className="flex p-5 text-[25px] font-bold text-white">
                  Portfolio
                </div>
                <div className=" flex cursor-pointer p-5 text-white">
                  <MenuIcon className="" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
