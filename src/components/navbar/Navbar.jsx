import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuItems from "../../config/menuItems";
import SocialMediaIcon from "../socialMediaIcon/SocialMediaIcon";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-10 w-10 lg:h-12 lg:w-12"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                activeClassName="active"
                className="navlink py-2 font-semibold text-lg capitalize"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right section (desktop) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <SocialMediaIcon />
            <Link
              to="#"
              // target="_blank"
              // rel="noopener noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Download CV
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg p-5">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block pl-3 pr-4 py-2 border--4 text-base font-medium ${
                    isActive
                      ? "bg-blue-50 "
                      : "border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-4">
                <SocialMediaIcon />
              </div>
              <div className="mt-3 px-2">
                <Link
                  to="#"
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
