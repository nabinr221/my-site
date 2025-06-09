import AboutSection from "../../components/about/AboutSection";
import Container from "../../components/container/Container";
import WorkExperience from "../../components/about/WorkExperience";
import EducationSection from "../../components/about/EducationSection";
import Seo from "../../components/seo/Seo";

const About = () => {
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
        keywords={["portfolio", "web developer", "react", "frontend"]}
        socialProfiles={{
          twitter: "nabin_twitter",
          linkedIn: "nabin-linkedin",
        }}
      />
      <Container classNmae="space-y-[3rem]">
        <AboutSection />
        <WorkExperience />
        <EducationSection />
      </Container>
    </>
  );
};

export default About;
