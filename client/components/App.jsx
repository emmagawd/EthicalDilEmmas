import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Forum from "./Forum.jsx";
import About from "./About.jsx";
import "../styles.css";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  let componentToRender;
  switch (currentPath) {
    case "/forum":
      componentToRender = <Forum />;
      break;
    // Add other cases for different paths
    case "/about":
      componentToRender = <About />;
      break;
    default:
      componentToRender = <MainContent />;
  }

  return (
    <div>
      <Header setCurrentPath={setCurrentPath} />
      {componentToRender};
    </div>
  );
};

export default App;
