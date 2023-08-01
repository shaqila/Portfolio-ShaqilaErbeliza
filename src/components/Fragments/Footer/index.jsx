import { motion } from "framer-motion";
const FooterComponent = () => {
  return (
    <footer className="bg-slate-300 text-slate-800 font-medium py-1 text-center">
      <motion.div
        className="bg-gradient-to-br from-blue-300 to-pink-300 w-10 h-10 rounded-xl mx-auto my-2"
        animate={{
          scale: [0.8, 1, 1, 0.8, 0.8],
          rotate: [0, 160, 270, 360, 0],
          borderRadius: ["20%", "50%", "20%", "50%", "20%"],
        }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <p> &copy; {new Date().getFullYear()} Copyright : Shaqila Erbeliza </p>
    </footer>
  );
};

export default FooterComponent;
