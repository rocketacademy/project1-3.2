const TitleLetter = ({ letter, color, position = 0 }) => {
  return (
    <div
      className="text-xl mx-[0.25rem] p-4 w-10 h-10 flex justify-center items-center rounded-lg font-semibold"
      style={{
        backgroundColor: color,
        transform: `translateY(-${position}px)`,
      }}
    >
      {letter}
    </div>
  );
};
export default TitleLetter;
