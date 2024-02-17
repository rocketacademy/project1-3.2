import { motion } from "framer-motion";

const LostBanner = ({ answer }) => {
  return (
    <div className="overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="fixed inset-0 w-[250px] h-[250px] mx-auto my-auto rounded-md bg-red-800 flex flex-col items-center justify-center gap-y-4 text-md z-10"
      >
        <div>
          <img
            src="/ra-project1-frontend/assets/lose.svg"
            alt="lose image"
            width={100}
          />
        </div>
        <div>
          The answer is <strong>{answer}</strong>.
        </div>
        <p className="text-sm">Refresh the page to play again.</p>
      </motion.div>
    </div>
  );
};
export default LostBanner;
