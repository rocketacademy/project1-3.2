import { Navbar, Nav } from "react-bootstrap";

export default function MobileNavbar({ onPageChange, currentPage }) {
  const handleNavClick = (page, event) => {
    event.preventDefault();
    onPageChange(page);
  };

  return (
    <Navbar fixed="bottom" className="navbar-bottom">
      <Nav className="mr-auto">
        <Nav.Link
          href="/home"
          active={currentPage === "home"}
          onClick={(event) => handleNavClick("home", event)}
        >
          <img src="Icons/home.png" />
        </Nav.Link>
        <Nav.Link
          href="/quotes"
          active={currentPage === "quotes"}
          onClick={(event) => handleNavClick("quotes", event)}
        >
          <img src="Icons/quotes.png" />
        </Nav.Link>
        <Nav.Link
          href="/gratitude"
          active={currentPage === "gratitude"}
          onClick={(event) => handleNavClick("gratitude", event)}
        >
          <img src="Icons/gratitude.png" />
        </Nav.Link>
        <Nav.Link
          href="/goals"
          active={currentPage === "goals"}
          onClick={(event) => handleNavClick("goals", event)}
        >
          <img src="Icons/goals.png" />
        </Nav.Link>
        <Nav.Link
          href="/journal"
          active={currentPage === "journal"}
          onClick={(event) => handleNavClick("journal", event)}
        >
          <img src="Icons/journal.png" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
