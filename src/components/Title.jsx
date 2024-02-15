import TitleLetter from "./TitleLetter";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 60,
          restDelta: 0.001,
        },
      }}
      className="flex items-center justify-center mt-4 mb-6"
    >
      <TitleLetter letter="W" color="#43a9c8" position="12" />
      <TitleLetter letter="O" color="#ec816c" />
      <TitleLetter letter="R" color="#43a9c8" position="12" />
      <TitleLetter letter="D" color="#2b5ccd" />
      <TitleLetter letter="L" color="#ec19d7" position="12" />
      <TitleLetter letter="E" color="#ec1947" />
      <img src="src/assets/plus.svg" width="60" className="" />
    </motion.div>
  );
};
export default Title;
