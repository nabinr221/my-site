import Title from "../../components/title/Title";
import Container from "../../components/container/Container";
import ProjectCards from "../../components/cards/ProjectCards";
import { projects } from "../../config/projects";
import Seo from "../../components/seo/Seo";

const Projects = () => {
  return (
    <>
      <Seo
        title="Nabin Ratgainya | Web Developer"
        author="Nabin R. Chaudhary"
        description=" I'm a passionate full-stack developer with a strong foundation in
        JavaScript, React, Node.js, and modern web technologies. I enjoy
        building intuitive user interfaces, solving complex backend challenges,
        and continuously learning to stay current with the tech landscape. I
        thrive in collaborative environments and love turning ideas into
        scalable digital solutions."
        canonicalUrl="https://www.nabinratgainya.com.np"
        keywords={[
          "Nabin Ratgainya",
          "Nabin R. Chaudhary",
          "web developer Nepal",
          "full stack web developer",
          "frontend developer Nepal",
          "dhangadhi",
          "kailali",
          "web developer",
          "full stack developer",
          "React developer",
          "Node.js developer",
          "portfolio website",
          "frontend developer",
          "backend developer",
          "Nepal web developer",
          "JavaScript developer",
          "freelance developer",
          "software engineer Nepal",
          "MERN stack developer",
          "Vite React portfolio",
          "GitHub Pages portfolio",
          "nabinratgainya.com.np",
          "responsive web design",
          "SEO optimized React site",
          "React portfolio template",
        ]}
        socialProfiles={{
          twitter: "https://twitter.com/nabin221", // Use full URL for SEO
          linkedIn: "https://www.linkedin.com/in/nabinr221/",
        }}
      />
      <Container className="mt-[5rem] px-5 sm:p-0">
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
            Note: Some projects are confidential and cannot be publicly shared
            due to company or client privacy policies.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Projects;
