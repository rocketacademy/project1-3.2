import { motion } from "framer-motion";

const WonBanner = ({ numOfGuesses }) => {
  return (
    <div className="overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="fixed inset-0 w-[250px] h-[250px] mx-auto my-auto rounded-md bg-green-800 flex flex-col items-center justify-center gap-y-4 text-md z-10"
      >
        <div>
          <img src="/src/assets/win.svg" alt="win image" width={120} />
        </div>
        <div>
          Got it in {""}{" "}
          <strong>
            {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
          </strong>
        </div>
        <p className="text-sm">Refresh the page to play again.</p>

        {/* <button
        onClick={handleRestart}
        className="w-full rounded-md py-2 bg-green-600 text-lg hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Restart
      </button> */}
      </motion.div>
    </div>
  );
};
export default WonBanner;
