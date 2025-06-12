import Title from "../title/Title";
import ProjectCards from "../cards/ProjectCards";
import { Link } from "react-router-dom";
import { projects } from "../../config/projects";

const ProjectSection = () => {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto">
      <Title
        title="Projects"
        subtitle="A showcase of things I’ve built and contributed to."
        className="items-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 mt-10 sm:mt-20 p-5 sm:p-0">
        {projects.map((item, index) => (
          <ProjectCards key={index} data={item} />
        ))}
      </div>
      {projects.length > 6 && (
        <div className="w-fit mx-auto mt-16">
          <Link
            to="/projects"
            className="w-full mx-auto bg-titleColor text-white px-4 py-2"
          >
            View More
          </Link>
        </div>
      )}

      <div className="w-full h-[1px] bg-slate-200 mt-20"></div>
      <div className="w-full h-fit p-5 sm:p-0 mt-10 sm:mt-20">
        <p className="text-center text-lg font-medium text-slate-500">
          Note: Some projects are confidential and cannot be publicly shared due
          to company or client privacy policies.
        </p>
      </div>
    </div>
  );
};

export default ProjectSection;
