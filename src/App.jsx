import "./App.css";
import { useState } from "react";
// Import Components
import Home from "./Components/Home.jsx";
import Quotes from "./Components/Quotes.jsx";
import Gratitude from "./Components/Gratitude.jsx";
import Goals from "./Components/Goals.jsx";
import Journal from "./Components/Journal.jsx";
import Navbar from "./Components/Navbar.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let pageContent;
  if (currentPage === "home") {
    pageContent = <Home />;
  } else if (currentPage === "quotes") {
    pageContent = <Quotes />;
  } else if (currentPage === "gratitude") {
    pageContent = <Gratitude />;
  } else if (currentPage === "goals") {
    pageContent = <Goals />;
  } else if (currentPage === "journal") {
    pageContent = <Journal />;
  }

  return (
    <div>
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      {pageContent}
    </div>
  );
}
