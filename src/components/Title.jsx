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
      className="flex items-center justify-center mt-4 mb-2 ml-4 lg:mt-10 lg:ml-0 lg:mb-8"
    >
      <TitleLetter letter="W" color="#43a9c8" position={8} />
      <TitleLetter letter="O" color="#ec816c" />
      <TitleLetter letter="R" color="#43a9c8" position={8} />
      <TitleLetter letter="D" color="#2b5ccd" />
      <TitleLetter letter="L" color="#ec19d7" position={8} />
      <TitleLetter letter="E" color="#ec1947" />
      <img
        src="/ra-project1-frontend/assets/plus.svg"
        className="w-[60px] -ml-2 -mb-2 lg:w-[100px] lg:-mb-2 lg:-ml-4"
      />
    </motion.div>
  );
};
export default Title;
