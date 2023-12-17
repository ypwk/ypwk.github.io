import React, { useState } from "react";

interface HeaderProps {
  pages: string[];
}

function formatPageName(pageName: string): string {
  return pageName
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s]/gi, "") // Remove all non-word characters except spaces
    .replace(/\s+/g, "_"); // Replace spaces with underscores
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/">KW</a>
          </div>
          <ul id="menu">
            {pages.map((pageName, index) => (
              <li key={index}>
                <a href={formatPageName(pageName)}>{pageName}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`menuIcon ${isMobileMenuOpen ? "toggle" : ""}`}
        onClick={toggleMenu}
      >
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div
        className="overlay-menu"
        style={{
          transform: isMobileMenuOpen ? "translateX(0%)" : "translateX(-100%)",
          transition: "transform 0.2s ease-out",
        }}
      >
        <ul id="menu">
          {pages.map((pageName, index) => (
            <li key={index}>
              <a href={formatPageName(pageName)}>{pageName}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
