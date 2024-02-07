import TitleLetter from "./TitleLetter";

const Title = () => {
  return (
    <div className="flex items-center">
      <TitleLetter letter="W" color="#43a9c8" position="12" />
      <TitleLetter letter="O" color="#ec816c" />
      <TitleLetter letter="R" color="#43a9c8" position="12" />
      <TitleLetter letter="D" color="#2b5ccd" />
      <TitleLetter letter="L" color="#ec19d7" position="12" />
      <TitleLetter letter="E" color="#ec1947" />
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
