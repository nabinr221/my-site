import AboutSection from "../../components/about/AboutSection";
import Container from "../../components/container/Container";
import WorkExperience from "../../components/about/WorkExperience";
import EducationSection from "../../components/about/EducationSection";

const About = () => {
  return (
    <>
      <Container classNmae='space-y-[3rem]'>
        <AboutSection />
        <WorkExperience />
        <EducationSection />
      </Container>
    </>
  );
};

export default About;
