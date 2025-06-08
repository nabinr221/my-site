import { Link } from "react-router-dom";
import menuItems from "../../config/menuItems";
import { Smartphone, Mail } from "lucide-react";
import SocialMediaIcon from "../socialMediaIcon/SocialMediaIcon";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="w-full absolute bg-slate-50  mt-20 py-8 px-4 sm:px-6 lg:px-8 xl:px-32">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-8">
        {/* Logo and Name */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="capitalize text-xl sm:text-2xl font-bold font-nunito text-titleColor">
              Nabin R. Chaudhary
            </h1>
            <p className="mt-1 text-sm text-gray-600">Full Stack Developer</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 sm:gap-6 items-center md:items-start lg:items-center lg:justify-end">
          <div className="flex items-center gap-3">
            <Smartphone className="flex-shrink-0 w-5 h-5 text-gray-700" />
            <a
              href="tel:+9779742372195"
              className="text-base text-gray-700 hover:text-blue-600 transition-colors"
            >
              +977 9742372195
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="flex-shrink-0 w-5 h-5 text-gray-700" />
            <a
              href="mailto:nabinrchy@gmail.com"
              className="text-base text-gray-700 hover:text-blue-600 transition-colors break-all"
            >
              nabinrchy@gmail.com
            </a>
          </div>
          <div className="xs:col-span-2">
            <SocialMediaIcon />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center sm:text-left">
          <p>Copyright © {year} Nabin R. Chaudhary - All rights reserved</p>
        </div>

        {/* Navigation Links */}
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 md:gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors capitalize"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
