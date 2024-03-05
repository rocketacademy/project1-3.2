import { range, checkGuess } from "../../../utilities";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;
  return (
    <span
      className={`border-2 border-gray-700 rounded-sm text-3xl w-1/5 aspect-square grid place-content-center ${className}`}
    >
      {letter}
    </span>
  );
}

const Guess = ({ value, answer }) => {
  const result = checkGuess(value, answer);
  return (
    <p className="flex gap-2 mb-2">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
};
export default Guess;
