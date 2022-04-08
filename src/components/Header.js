import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-4 pb-2 border-b flex justify-center items-center sm:justify-between">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 rounded-lg px-4 text-white">
            Finder🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="bg-black text-white rounded-lg px-4 py-1 dark:bg-white dark:text-black"
        >
          {darkTheme ? "💡Light" : "🌙Dark"}
        </button>
      </div>
      <Search />
    </div>
  );
};
