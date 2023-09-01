import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="projectCard">
        <div className="projects flex flex-col w-[330px] h-[420px] py-[26px] px-[20px] gap-[14px] rounded-[10px] bg-[#171721] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-[10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] filter-[1.1]">
          <img
            src={project.image}
            alt=""
            className="img w-full h-[180px] bg-[white] rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)]"
          />
          <div className="tags flex w-full items-center flex-wrap gap-[8px]">
            {project.tags?.map((tag, index) => (
              <p
                className="tag text-[12px] font-[400] text-[#854aea] py-[2px] px-[8px] rounded-[10px] bg-[#713ace23]"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="details text-[#f2f3f4]">
            <div className="title text-[20px] font-[600] w-full">
              {project.title}
            </div>
            <div className="date text-[12px] font-[400] ml-1">
              {project.date}
            </div>
            <div className="description text-[16px] font-[400] text-[#b1b2b3] overflow-hidden">
              {project.description.substring(0, 100)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

{
  /* <div className="outerCard flex flex-col gap-14 w-[330px] h-[490px] bg-[#171721] cursor-pointer rounded-[10px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)]  py-[26px] px-[20px] mt-5 pb-[50px] ">
  <img
    src={project.image}
    alt=""
    className="img w-full h-[180px] bg-[white] rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)]"
  />
  <div className="tags flex w-full items-center gap-[8px] mt-[4px] ">
    {project.tags?.map((tag, index) => (
      <p
        className="tag text-[12px] font-[400] text-[#F2F3F4] py-[2px] px-[8px] rounded-[10px] bg-[#3785d4]"
        key={index}
      >
        {tag}
      </p>
    ))}
  </div>
  <div className="details w-full flex flex-col gap-0 px-2">
    <div className="title text-[20px] font-[600] text-[#f2f3f4] max-w-100% ">
      {project.title}
    </div>
    <div className="date text-[12px] ml-[2px] font-[400] text-[#F2F3F4]">
      {project.date}
    </div>
    <div className="description font-[400]  text-[#F2F3F4]  m-8 max-w-100% text-ellipsis">
      {project.description.substring(0, 80)}
    </div>
  </div>
</div>; */
}
