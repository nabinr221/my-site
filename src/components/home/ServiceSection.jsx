import React from "react";
import ServiceCard from "../cards/ServiceCard";
import Title from "../title/Title";
import { services } from "../../config/services";

const ServiceSection = () => {
  return (
    <div>
      <Title
        title='Services'
        subtitle='What I can do for you?'
        className='items-center'
      />
      <div className='w-full px-5 sm:p-0 grid grid-cols-1 sm:grid-cols-4'>
        {services.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
