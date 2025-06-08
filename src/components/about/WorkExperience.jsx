import SecondaryTitle from "../title/SecondaryTitle";
import ExperienceCard from "../cards/ExperienceCard";
import { experience } from "../../config/experience";

const WorkExperience = () => {
  return (
    <div className="w-full px-5 sm:p-0">
      <SecondaryTitle title="Work Experience" />
      <div className="w-full lg:w-[70%] space-y-5 my-10">
        {experience.map((item, index) => (
          <ExperienceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
