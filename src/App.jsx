import logo from "/logo.png";
import "./App.css";
import Quote from "./components/RandomQuote/Quote";
import UserInput from "./components/RandomQuote/UserInput";

function App() {
  return (
    <>
      <UserInput />
      <Quote />
    </>
  );
}

export default App;
