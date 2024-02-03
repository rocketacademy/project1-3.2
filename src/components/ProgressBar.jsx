const ProgressBar = ({ questionsAnswered }) => {
  const progressWidth = (questionsAnswered / 2) * 100;

  return (
    <div className="w-full bg-gray-200 mt-4 rounded-full h-4 dark:bg-gray-700 dark:bg-opacity-50">
      <div
        className="bg-blue-500 h-4 rounded-full w-[50%] transition-all duration-1000 ease-in-out"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
