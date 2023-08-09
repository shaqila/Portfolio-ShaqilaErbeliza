/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="text-slate-800 font-bold text-xl my-auto">
            Shaqila E.
          </div>
          <div className="lg:hidden mt-2">
            <motion.button
              onClick={toggleMenu}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-slate-800"
            >
              {showMenu ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
            </motion.button>
          </div>
          <div className="hidden lg:flex space-x-8 font-semibold">
            {[
              ["Home", "/"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Contacts", "/contact"],
            ].map(([title, url]) => (
              <Link
                key={title}
                to={url}
                className="rounded-lg px-3 py-2 my-auto text-slate-800 font-bold hover:text-slate-700 hover:-translate-y-0.5 duration-75"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        {showMenu && (
          <div className="lg:hidden mt-4 font-semibold">
            {[
              ["Home", "/"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Contacts", "/contact"],
            ].map(([title, url]) => (
              <Link
                key={title}
                to={url}
                className="rounded-lg block px-3 py-2 my-auto text-slate-800 font-bold hover:text-slate-700 hover:-translate-y-0.5 duration-75"
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
