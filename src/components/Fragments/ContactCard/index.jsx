/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContactCard = ({ icon, name, description, link }) => {
  return (
    <motion.div
      className="flex overflow-hidden items-center space-x-4 w-full p-4 rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 shadow-md"
      whileHover={{ scale: 1.1 }}
    >
      <div>{icon}</div>
      <Link to={link} target="_blank">
        <div className="flex flex-col space-y-2 items-start text-slate-800 text-xs font-light md:font-semibold md:text-md">
          <div>
            <h2 className="font-bold ">{name}</h2>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
