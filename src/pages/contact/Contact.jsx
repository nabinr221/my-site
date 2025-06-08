import Title from "../../components/title/Title";
import Container from "../../components/container/Container";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
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
  );
};

export default Contact;
