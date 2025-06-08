import React from "react";

const SecondaryTitle = ({ title, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <h1 className='text-titleColor text-2xl font-extrabold'>{title}</h1>
    </div>
  );
};

export default SecondaryTitle;
