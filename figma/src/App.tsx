import React from "react";
import "./components/LeftSidebar/LeftSidebar.css";
import "./components/RightSidebar/RightSidebar.css";
import "./App.css";
import ReactDOM from "react-dom";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

const App: React.FC = () => {
  return (
    <div className="container">
      <LeftSidebar />
      <div className="content">{}</div>
      <RightSidebar />
    </div>
  );
};

export default App;
