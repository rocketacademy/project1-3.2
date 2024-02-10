const ProgressBar = ({ questionsAnswered }) => {
  const progressWidth = (questionsAnswered / 2) * 100;

  return (
    <div className="w-full bg-gray-700 my-6 rounded-full h-5">
      <div
        className="h-5 rounded-full transition-all duration-1000 ease-in-out"
        style={{
          width: `${progressWidth}%`,
          background: "linear-gradient(to right, #FF789A, #D26EFF)",
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
