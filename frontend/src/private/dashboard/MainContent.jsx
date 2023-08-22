import Navigation from "./components/Navigation";
import Feed from "./components/Feed";

import Suggestions from "./components/Suggestions";

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
