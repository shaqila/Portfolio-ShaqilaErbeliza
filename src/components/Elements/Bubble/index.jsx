/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function BubbleAnimation({ animate, style, color }) {
  return (
    <motion.div
      className="absolute w-36 h-36 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      style={{ backgroundColor: color, ...style }}
      animate={animate}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    ></motion.div>
  );
}

export default BubbleAnimation;
