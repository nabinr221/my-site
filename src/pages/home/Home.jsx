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
      <Container className="space-y-[3rem] md:space-y-[10rem]">
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
