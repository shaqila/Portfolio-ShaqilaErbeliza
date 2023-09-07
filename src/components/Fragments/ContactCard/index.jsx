/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const ContactCard = ({ icon, name, description, link }) => {
  return (
    <motion.div
      className="flex overflow-hidden items-center space-x-4 w-full p-4 rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 shadow-md cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onClick={() => window.open(link)}
      target="_blank"
      title={name + ": " + description}
    >
      <div>{icon}</div>
      <div className="flex flex-col space-y-2 items-start text-slate-800 text-xs font-light md:font-semibold md:text-md">
        <div>
          <h2 className="font-bold ">{name}</h2>
          <span>{description}</span>
        </div>
      </div>
    </motion.div>
  );
};
