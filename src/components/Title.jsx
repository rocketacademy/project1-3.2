import TitleLetter from "./TitleLetter";

const Title = () => {
  return (
    <div className="flex items-center">
      <TitleLetter letter="W" color="#15933d" position="12" />
      <TitleLetter letter="O" color="#b8a131" />
      <TitleLetter letter="R" color="#15933d" position="12" />
      <TitleLetter letter="D" color="#3c3f3f" />
      <TitleLetter letter="L" color="#b8a131" position="12" />
      <TitleLetter letter="E" color="#3c3f3f" />
      <div className="-ml-4">
        <img src="../public/plus.svg" width="100" />
      </div>
      {/* <div className="ml-4">
        <img src="../public/plus1.svg" width="80" />
      </div> */}
    </div>
  );
};
export default Title;
