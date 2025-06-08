import React from "react";

const HomeSection = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row mt-28 gap-10 sm:gap-5 items-center justify-between'>
      <div className=' '>
        <h1 className=' flex flex-col font-bold text-3xl sm:text-[2.7rem]  text-center sm:text-start space-y-2 sm:space-y-5'>
          <span> Hii 👋,</span>
          <span>My name is </span>{" "}
          <span className='text-blue-800'>Nabin R. Chaudhary </span>
          <span className='text-xl sm:text-[2rem] font-semibold italic capitalize'>
            {`"full stack developer"`}{" "}
          </span>
        </h1>
      </div>
      <div>
        <div className='w-[16rem] h-[16rem] sm:w-[25rem] sm:h-[25rem] rounded-full border-[.4rem] sm:border-[.7rem] border-blue-500'>
          <img src='/nabn.jpg' alt='' className='w-full h-full rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
