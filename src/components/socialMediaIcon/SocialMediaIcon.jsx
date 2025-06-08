import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaIcon = () => {
  return (
    <div className="flex gap-2 me-7">
      <Link to="https://github.com/nabinr221" target="_blank">
        <div className="w-8 h-8 p-1.5 flex justify-center items-center bg-black rounded-full border hover:bg-[#656464] transition-all duration-300">
          <Github className="text-white" />
        </div>
      </Link>
      <Link to="https://www.linkedin.com/in/nabinr221/" target="_blank">
        <div className="w-8 h-8 p-1.5 flex justify-center items-center bg-black rounded-full border hover:bg-[#656464] transition-all duration-300">
          <Linkedin className="text-white" />
        </div>
      </Link>
      <Link to="mailto:nabinrchy@gmail.com" target="_blank">
        <div className="w-8 h-8 p-1.5 flex justify-center items-center bg-black rounded-full border hover:bg-[#656464] transition-all duration-300">
          <Mail className="text-white" />
        </div>
      </Link>
    </div>
  );
};

export default SocialMediaIcon;
