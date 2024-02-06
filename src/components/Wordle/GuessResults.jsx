const GuessResults = ({ guesses }) => {
  return (
    <div>
      {guesses.map((guess, index) => {
        return <p key={index}>{guess}</p>;
      })}
    </div>
  );
};
export default GuessResults;
