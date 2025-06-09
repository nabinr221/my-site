import Title from "../../components/title/Title";
import Container from "../../components/container/Container";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import Seo from "../../components/seo/Seo";

const Contact = () => {
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
      <Container classNmae="mt-[5rem] px-5 sm:p-0">
        <Title
          title="Contact"
          subtitle="Have any questions or feedback? Feel free to reach out — I'd love to hear from you!"
          className="items-center text-center  sm:text-start  sm:items-start "
        />
        <div className=" flex flex-col sm:flex-row gap-5 sm:gap-10 mt-10 sm:mt-20 custom-shadow">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default Contact;
