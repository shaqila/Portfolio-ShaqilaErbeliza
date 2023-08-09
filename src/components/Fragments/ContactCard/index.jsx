/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContactCard = ({ icon, name, description, link }) => {
  return (
    <motion.div className="flex items-center space-x-4 w-full md:w-max min-w-[300px] p-4 rounded-xl shadow-lg bg-slate-200">
      <div className="w-20 h-20">{icon}</div>
      <div className="flex flex-col space-y-2 items-start text-slate-800 text-sm font-bold">
        <div>
          <h2 className="text-lg font-bold ">{name}</h2>
          <span>{description}</span>
        </div>
        <Link
          to={link}
          target="_blank"
          className="text-teal-600 hover:text-white hover:bg-teal-600 rounded-md p-1"
        >
          Send a message
        </Link>
      </div>
    </motion.div>
  );
};
