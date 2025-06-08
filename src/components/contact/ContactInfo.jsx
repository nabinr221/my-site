import { Mail, MapPin, Smartphone } from "lucide-react";
import SocialMediaIcon from "../../components/socialMediaIcon/SocialMediaIcon";
const ContactInfo = () => {
  return (
    <>
      <div className="w-full sm:w-[50%] bg-[#222] text-white p-10">
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Contact Information
          </h1>
          <p className="text-base sm:text-lg font-bold">
            Say something to start a live chat!
          </p>
        </div>

        <div className="my-10 space-y-5">
          <span className="flex items-center gap-2">
            <Smartphone /> +977 9742372195
          </span>
          <span className="flex items-center gap-2">
            <Mail /> nabinrchy@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin />
            Kathmandu, Nepal
          </span>
        </div>
        <SocialMediaIcon />
      </div>
    </>
  );
};

export default ContactInfo;
