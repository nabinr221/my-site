import Container from "../../components/container/Container";
import HomeSection from "../../components/home/HomeSection";
import TechStack from "../../components/home/TechStack";
import ProjectSection from "../../components/home/ProjectSection";
import Seo from "../../components/seo/Seo";

const Home = () => {
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
      <Container classNmae="space-y-[3rem] md:space-y-[10rem]">
        <HomeSection />
        <TechStack />
      </Container>
      <div className="w-full bg-slate-50 mt-20 py-20">
        <ProjectSection />
      </div>
    </>
  );
};

export default Home;
