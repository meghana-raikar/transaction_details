import React, { useState } from "react";
import "./transaction.css";
import Sidebar from "./Sidebar";
import Stage from "./Stage";
import Content from "./Content";

const Transaction = () => {
  const [showStage, setShowStage] = useState(true);
  const [showContent, setShowContent] = useState(true);

  const handleLogoClick = () => {
    setShowStage(true);
    setShowContent(false);
  };

  const handleStageClick = () => {
    setShowContent(true); // Set showContent to true when stage is clicked
  };

  const handleCloseClick = () => {
    setShowStage(false); // Set showStage to false when close button is clicked
    setShowContent(false); 
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar onLogoClick={handleLogoClick} />
      </div>

      {/* Render the Stage component */}
      <div className="stagebar">
        {showStage && (
          <Stage
            onStageClick={handleStageClick}
            onCloseClick={handleCloseClick}
          />
        )}
      </div>

      {/* Render the Content component */}
      <div className="contentpart">{showContent && <Content />}</div>
    </div>
  );
};

export default Transaction;
