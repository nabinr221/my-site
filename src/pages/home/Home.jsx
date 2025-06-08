import Container from "../../components/container/Container";
import HomeSection from "../../components/home/HomeSection";
import TechStack from "../../components/home/TechStack";
import ProjectSection from "../../components/home/ProjectSection";

const Home = () => {
  return (
    <>
      <Container classNmae='space-y-[3rem] md:space-y-[10rem]'>
        <HomeSection />
        <TechStack />
      </Container>
      <div className='w-full bg-slate-50 mt-20 py-20'>
        <ProjectSection />
      </div>
    </>
  );
};

export default Home;
