import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Navlinks = ({ className }) => (
    <ul
      className={`flex flex-col gap-7 md:flex-row space-y-4 md:space-y-0 md:space-x-6 ${className}`}
    >
      <li>
        <Link
          to="/"
          className="hover:text-yellow-300 transition hover:border-b-2 hover:border-amber-200 cursor-pointer py-2"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-yellow-300 transition hover:border-b-2 hover:border-amber-200 cursor-pointer py-2"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className="hover:text-yellow-300 transition hover:border-b-2 hover:border-amber-200 cursor-pointer py-2"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-yellow-300 transition hover:border-b-2 hover:border-amber-200 cursor-pointer py-2"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="bg-transparent z-10 fixed top-0 w-full bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center text-yellow-100 md:text-xl">
          <Link to="/">
            <div className="text-3xl font-bold text-yellow-500 md:text-6xl">
              Jebena
            </div>
          </Link>
          <div className="hidden md:flex">
            <Navlinks />
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <span className="font-semibold text-3xl">X</span>
            ) : (
              <FiMenu size={30} color="black" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-gray-700 bg-opacity-[0] text-black w-full px-6">
            <Navlinks className="flex-col gap-3 space-y-2 py-4" />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
