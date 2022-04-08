import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Results } from "./Results";

export const Routess = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/">
          {navigate("/search")}
        </Route>

        {/* <Route exact path={["/search", "/videos", "/images", "news"]}>
          <Results />
        </Route> */}

        <Route exact path="/search" element={<Results />} />

        <Route exact path="/images" element={<Results />} />

        <Route exact path="/news" element={<Results />} />

        <Route exact path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
