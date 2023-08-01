import { useState } from "react";
import { motion } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";
const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`h-8 w-20 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full flex items-center box-border px-3 cursor-pointer transition-all duration-300 ${
        isOn ? "bg-[#52527a] from-[#3e0574] to-[#d84494]" : ""
      }`}
      data-darkmode={isOn}
      onClick={() => setIsOn(!isOn)}
      style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
    >
      <motion.div
        layout
        className={`h-6 w-6 rounded-full grid place-items-center bg-white overflow-hidden ${
          isOn ? "text-[#501a96]" : "text-[#f88748]"
        }`}
      >
        <motion.div
          key={isOn ? "moon" : "sun"}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOn ? <LuMoon size={18} /> : <LuSun size={18} />}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Switch;
