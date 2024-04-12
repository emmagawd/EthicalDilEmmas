import React from "react";

const Header = ({ setCurrentPath }) => {
  const handleNavigation = (path, event) => {
    event.preventDefault();
    setCurrentPath(path);
    window.history.pushState({}, "", path);
  };

  return (
    <div>
      <h1 class="title">Welcome to Ethical DilEmmas!</h1>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={(e) => handleNavigation("/", e)}>
              Home
            </a>
          </li>
          <li>
            <a href="/forum" onClick={(e) => handleNavigation("/forum", e)}>
              Forum
            </a>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleNavigation("/about", e)}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
