import PropTypes from "prop-types";
import { Building, MapPin, CalendarDays } from "lucide-react";

const ExperienceCard = ({ data }) => {
  return (
    <div className='w-full experienceCard p-5 transition-all duration-500 border'>
      <div className='flex flex-wrap sm:items-center justify-between gap-2'>
        {data?.title && (
          <h1 className=' text-xl text-titleColor capitalize'>{data?.title}</h1>
        )}
        {data?.jobType && (
          <span className=' rounded-3xl bg-[#ebe7e7] text-[#018C0F] font-bold capitalize py-1 px-5 text-xs '>
            {data?.jobType}
          </span>
        )}
      </div>

      <div className='flex flex-wrap sm:justify-between gap-2 mt-5'>
        <div className=' capitalize flex  flex-wrap sm:justify-between sm:items-center gap-2 sm:gap-5'>
          {data?.company && (
            <p className='flex font-semibold gap-1 sm:items-start text-sm text-titleLightColor '>
              <Building className='w-4 h-4' /> <span>{data?.company}</span>
            </p>
          )}
          {data?.location && (
            <span className='flex gap-1 items-start text-sm font-semibold text-titleLightColor '>
              <MapPin className='w-4 h-4' />
              {data?.location}
            </span>
          )}
        </div>
        {data?.joiningDate && data?.leavingDate && (
          <div className='flex items-start  gap-2'>
            <CalendarDays className='w-4 h-4 text-titleLightColor text-sm ' />
            <p className='capitalize text-titleLightColor text-sm'>
              <span>{data?.joiningDate}</span> -{" "}
              <span>{data?.leavingDate}</span>
            </p>
          </div>
        )}
      </div>
      {/* <div className='border-b-2 mt-5'></div> */}
    </div>
  );
};

ExperienceCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    jobType: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    joiningDate: PropTypes.string,
    leavingDate: PropTypes.string,
  }),
};

export default ExperienceCard;
