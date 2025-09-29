import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../images/Divetotech-Final-logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActivePage = (path: string) =>
    location.pathname === path
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary";

  const isActiveSection = (id: string) =>
    activeSection === id
      ? "text-primary font-semibold border-b-2 border-primary"
      : "text-gray-700 hover:text-primary";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-sm ${
        location.pathname === "/" ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="DiveToTech Logo"
            className="w-40 h-auto object-contain"
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">

          <button
            onClick={() => handleScroll("services")}
            className={isActiveSection("services")}
          >
            Services
          </button>

          <button
            onClick={() => handleScroll("about")}
            className={isActiveSection("about")}
          >
            About
          </button>

          <Link to="/contact" className={isActivePage("/contact")}>
            Contact
          </Link>
          <Link to="/register">
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                location.pathname === "/register"
                  ? "bg-primary text-white shadow-md"
                  : "bg-primary text-white hover:bg-primary/80"
              }`}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
