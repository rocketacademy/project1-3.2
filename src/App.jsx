import logo from "/logo.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import QuoteWrapper from "./components/RandomQuote/QuoteWrapper";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/quote" element={<QuoteWrapper/>}/>
        </Routes>

    </>
  );
}

export default App;
