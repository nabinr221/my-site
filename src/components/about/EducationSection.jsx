import SecondaryTitle from "../title/SecondaryTitle";
import { education } from "../../config/experience.js";
import ExperienceCard from "../cards/ExperienceCard";

const EducationSection = () => {
  return (
    <div className="w-full px-5 sm:p-0">
      <SecondaryTitle title="Education" />
      <div className="w-full lg:w-[70%] space-y-5 my-10">
        {education.map((item, index) => (
          <ExperienceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
