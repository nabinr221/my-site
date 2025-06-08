import Title from "../../components/title/Title";
import Container from "../../components/container/Container";
import ProjectCards from "../../components/cards/ProjectCards";
import { projects } from "../../config/projects";

const Projects = () => {
  return (
    <Container classNmae="mt-[5rem] px-5 sm:p-0">
      <Title
        title="Projects"
        subtitle="A showcase of things I’ve built and contributed to."
        className="items-start"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 mt-10 sm:mt-20">
        {projects.map((item, index) => (
          <ProjectCards key={index} data={item} />
        ))}
      </div>{" "}
      <div className="w-full h-[1px] bg-slate-200 mt-20"></div>
      <div className="w-full h-fit p-5 sm:p-0 mt-10 sm:mt-20">
        <p className="text-center text-lg font-medium text-slate-500">
          Note: Some projects are confidential and cannot be publicly shared due
          to company or client privacy policies.
        </p>
      </div>
    </Container>
  );
};

export default Projects;
