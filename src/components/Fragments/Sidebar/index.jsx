import { LuGithub, LuGitlab, LuMail, LuInstagram } from "react-icons/lu";
import { motion } from "framer-motion";
const SidebarComponent = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      className="fixed top-1/2 left-0 transform -translate-y-1/2  flex flex-col rounded-xl ml-2 bg-slate-300 shadow-xl border h-auto w-10 "
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col items-center py-4">
        <a href="#portfolio" className="text-slate-800 m-2">
          <LuGithub size={24} />
        </a>
        <a href="#about" className="text-slate-800 m-2">
          <LuGitlab size={24} />
        </a>
        <a href="#contact" className="text-slate-800 m-2">
          <LuMail size={24} />
        </a>
        <a href="#home" className="text-slate-800 m-2">
          <LuInstagram size={24} />
        </a>
      </div>
    </motion.div>
  );
};

export default SidebarComponent;
