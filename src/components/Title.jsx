import TitleLetter from "./TitleLetter";

const Title = () => {
  return (
    <div className="flex items-center">
      <TitleLetter letter="W" color="#2CAD55" position="12" />
      <TitleLetter letter="O" color="#C8B661" />
      <TitleLetter letter="R" color="#2CAD55" position="12" />
      <TitleLetter letter="D" color="#5C6060" />
      <TitleLetter letter="L" color="#C8B661" position="12" />
      <TitleLetter letter="E" color="#5C6060" />
      <div className="-ml-8 mt-4">
        <img src="../public/plus.svg" width="200" />
      </div>
      {/* <div className="ml-4">
        <img src="../public/plus1.svg" width="80" />
      </div> */}
    </div>
  );
};
export default Title;
