import Guess from "./Guess";
import { range } from "../../../utilities";
import { NUM_OF_GUESSES_ALLOWED } from "../../settings";

const GuessResults = ({ guesses, answer }) => {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} answer={answer} />;
      })}
    </div>
  );
};
export default GuessResults;
