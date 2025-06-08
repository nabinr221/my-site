import React from "react";

const Container = ({ children, classNmae, ...props }) => {
  return <div className={`w-full md:w-[80%] mx-auto  ${classNmae}`}>{children}</div>;
};

export default Container;
