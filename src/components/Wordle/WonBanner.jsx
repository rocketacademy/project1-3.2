import { motion } from "framer-motion";

const handleRestart = () => {
  console.log(`Restarting the game`);
};

const WonBanner = ({ numOfGuesses }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="fixed inset-0 w-[300px] h-[300px] mx-auto my-auto rounded-md bg-green-800 flex flex-col items-center justify-between px-8 py-10 text-xl"
    >
      <div>
        <img src="../../public/win.svg" alt="win image" width={120} />
      </div>
      <div>
        Got it in {""}{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
      </div>
      <button
        onClick={handleRestart}
        className="w-full rounded-md py-2 bg-green-600 text-lg hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Restart
      </button>
    </motion.div>
  );
};
export default WonBanner;
