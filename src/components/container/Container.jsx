import React from "react";

const Container = ({ children, className, ...props }) => {
  return <div className={`w-full md:w-[80%] mx-auto  ${className}`}>{children}</div>;
};


export default Container;
