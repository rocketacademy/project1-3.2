const ProgressBar = ({ questionsAnswered }) => {
  const progressWidth = (questionsAnswered / 2) * 100;

  return (
    <div className="w-full bg-gray-200 mt-4 rounded-full h-5 dark:bg-gray-700 dark:bg-opacity-50">
      <div
        className="h-4 rounded-full transition-all duration-1000 ease-in-out"
        style={{
          width: `${progressWidth}%`,
          background: "linear-gradient(to right, #F4517A, #B84BE9)",
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
