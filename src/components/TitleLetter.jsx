const TitleLetter = ({ letter, color, position = 0 }) => {
  return (
    <div
      className="text-5xl mr-4 p-4 w-20 h-20 flex justify-center items-center rounded-lg font-semibold"
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
