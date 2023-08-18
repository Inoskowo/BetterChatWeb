import React from "react";
import Navigation from "./Navigation";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="left-panel">
        <Navigation />
      </div>
      <div className="feed-panel">
        <Feed />
      </div>
      <div className="right-panel">
        <Suggestions />
      </div>
    </div>
  );
};

export default MainContent;
