import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routess } from "./components/Routess";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 min-h-screen text-xl  dark:bg-black dark:text-cyan-200">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routess />
        <Footer />
      </div>
    </div>
  );
};

export default App;
