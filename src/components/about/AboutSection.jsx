import SecondaryTitle from "../title/SecondaryTitle";

const AboutSection = () => {
  return (
    <div className="w-[95%] px-5 sm:p-0  lg:w-[60%] mt-20">
      <SecondaryTitle title="About Me" />
      <p className="mt-6 font-medium text-titleSubColor">
        {` I'm a passionate full-stack developer with a strong foundation in
        JavaScript, React, Node.js, and modern web technologies. I enjoy
        building intuitive user interfaces, solving complex backend challenges,
        and continuously learning to stay current with the tech landscape. I
        thrive in collaborative environments and love turning ideas into
        scalable digital solutions.`}
      </p>
    </div>
  );
};

export default AboutSection;
