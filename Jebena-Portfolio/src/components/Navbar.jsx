import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/images/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Navlinks = ({ className }) => (
    <ul
      className={`flex flex-col gap-7 md:flex-row space-y-4 md:space-y-0 md:space-x-6 ${className} bg-opacity-70 px-6`}
    >
      <li>
        <Link
          smooth={true}
          activeClass="active"
          spy={true}
          duration={1500}
          to="home"
          className="hover:text-yellow-950 transition hover:border-b-4 hover:border-yellow-500 cursor-pointer py-2 font-bold"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          smooth={true}
          activeClass="active"
          spy={true}
          duration={1500}
          to="about"
          className="hover:text-yellow-950 transition hover:border-b-4 hover:border-yellow-500 cursor-pointer py-2 font-bold"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="services"
          smooth={true}
          activeClass="active"
          spy={true}
          duration={1500}
          className="hover:text-yellow-950 transition hover:border-b-4 hover:border-yellow-500 cursor-pointer py-2 font-bold"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="team"
          smooth={true}
          activeClass="active"
          spy={true}
          duration={1500}
          className="hover:text-yellow-950 transition hover:border-b-4 hover:border-yellow-500 cursor-pointer py-2 font-bold"
          onClick={() => setIsOpen(false)}
        >
          Our Team
        </Link>
      </li>
      <li>
        <Link
          smooth={true}
          activeClass="active"
          spy={true}
          duration={1500}
          to="contact"
          className="hover:text-yellow-950 transition hover:border-b-4 hover:border-yellow-500 cursor-pointer py-2 font-bold"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="bg-white z-10 fixed top-0 w-screen bg-opacity-80 backdrop-blur-sm">
        <div className="w-[85%] mx-auto px-4 py-4 flex justify-between items-center text-yellow-900 md:text-xl">
          <Link
            smooth={true}
            activeClass="active"
            spy={true}
            duration={1500}
            to="home"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex gap-x-3 items-center">
              <img src={logo} alt="" className="w-[80px]" />
              <h2 className="text-3xl font-bold text-yellow-950 md:text-6xl">
                Jebena{" "}
              </h2>
            </div>
          </Link>
          <div className="hidden lg:flex">
            <Navlinks />
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <span className="font-semibold text-3xl">X</span>
            ) : (
              <FiMenu size={30} color="black" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-gray-700 bg-opacity-[0] text-yellow-900 w-full ">
            <Navlinks className="flex-col gap-2 space-y-2 py-4" />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
