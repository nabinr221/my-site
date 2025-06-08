import { useRef, useState } from "react";
import InputField from "../../components/inputField/InputField";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!formRef.current) return;

      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "service_m8wme9c", // From EmailJS dashboard
        "template_zpmtxk8", // From EmailJS dashboard
        formRef.current,
        "XQve22vjdqz_-GP-f" // From EmailJS dashboard
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 p-10 bg-white">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
        <InputField
          label="Full Name"
          placeholder="Enter your name"
          type="text"
          name="name"
          required={true}
        />
        <InputField
          label="Email"
          placeholder="ex: jhon@example.com"
          type="email"
          name="email"
          required={true}
        />
        <InputField
          label="Subject"
          placeholder="Subject..."
          type="text"
          name="subject"
          required={true}
        />
        <InputField
          label="Message"
          placeholder="Your message..."
          type="text-area"
          name="message"
          required={true}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#403d38] hover:bg-[#847460] py-2 px-5 text-white font-semibold transition-all duration-500 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        {submitStatus && (
          <div
            className={`mt-4 p-3 rounded ${
              submitStatus.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
