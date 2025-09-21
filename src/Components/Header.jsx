import { memo, useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header className="flex justify-between w-full h-16 items-center px-4 bg-white shadow-md">
        <Link className="logo text-2xl font-bold text-[#2686f7]">
          Back Word
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          <NavLink className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </NavLink>
          <NavLink className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            About
          </NavLink>
          <NavLink className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-5">
          <button
            className="border w-24 h-9 bg-[#2686f7] transition duration-300 ease-in-out hover:bg-[#109e5a] text-white hover:shadow-lg cursor-pointer rounded"
            onClick={props.login}
          >
            Login
          </button>
          <button
            onClick={props.sign}
            className="border w-24 h-9 bg-[#2686f7] transition duration-300 ease-in-out hover:bg-[#109e5a] text-white hover:shadow-lg cursor-pointer rounded"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
            <a href="#" onClick={handleClose} className="hover:text-[#2686f7]">
              Home
            </a>
            <a href="#" onClick={handleClose} className="hover:text-[#2686f7]">
              About
            </a>
            <a href="#" onClick={handleClose} className="hover:text-[#2686f7]">
              Contact
            </a>
            <button
              onClick={props.login}
              className="border w-32 h-10 bg-[#2686f7] transition duration-300 ease-in-out hover:bg-[#109e5a] text-white hover:shadow-lg cursor-pointer rounded"
            >
              Login
            </button>
            <button
              onClick={props.sign}
              className="border w-32 h-10 bg-[#2686f7] transition duration-300 ease-in-out hover:bg-[#109e5a] text-white hover:shadow-lg cursor-pointer rounded"
            >
              Sign Up
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default memo(Header);
