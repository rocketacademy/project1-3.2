import Banner from "./Banner"

const WonBanner = ({numOfGuesses}) => {
  return (
    <Banner status="happy">
      <p>
        <strong>Congrats!</strong> Got it in {''} <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner >
  )
}
export default WonBanner