import OptionSelect from "./OptionSelect";


const Question = ({ title, options, correctAnswer, source }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>Placeholder for image or sound</div>
      {options.map((option) => {
        return <OptionSelect key={option} text={option} />;
      })}
      <p>{correctAnswer}</p>
      <p>{source}</p>
    </div>
  );
};
export default Question;
