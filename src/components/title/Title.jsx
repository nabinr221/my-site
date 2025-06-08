import React from "react";

const Title = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`flex flex-col ${className} space-y-5`}>
      <h1 className='text-3xl font-bold text-titleColor capitalize'>{title}</h1>
      <p className='text-titleSubColor text-xl font-semibold  '>{subtitle} </p>
    </div>
  );
};

export default Title;
