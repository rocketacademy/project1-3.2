const TitleLetter = ({ letter, color, position = 0 }) => {
  return (
    <div
      className="text-xl mx-1 p-4 w-10 h-10 flex justify-center items-center rounded-lg font-semibold lg:w-14 lg:h-14 lg:text-3xl lg:mx-2"
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
