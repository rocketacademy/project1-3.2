import Banner from "./Banner";

const LostBanner = ({ answer }) => {
  return (
    <Banner status="sad">
      <p>Sorry, the correct answer is {answer}.</p>
    </Banner>
  );
};
export default LostBanner;
