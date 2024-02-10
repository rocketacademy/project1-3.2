import { motion } from "framer-motion";

const LostBanner = ({ answer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="fixed inset-0 w-[300px] h-[300px] mx-auto my-auto rounded-md bg-red-800 flex flex-col items-center justify-evenly px-8 py-8 text-xl"
    >
      <div>
        <img src="../../public/lose.svg" alt="lose image" width={100} />
      </div>
      <div>
        The answer is <strong>{answer}</strong>.
      </div>
      <p className="text-base">Refresh the page to play again.</p>
      {/* <button
        onClick={handleRestart}
        className="w-full rounded-md py-2 bg-red-600 text-lg hover:bg-red-700 transition duration-300 ease-in-out"
      >
        Restart
      </button> */}
    </motion.div>
  );
};
export default LostBanner;
