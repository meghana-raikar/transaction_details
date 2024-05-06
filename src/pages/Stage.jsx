import React from "react";
import "./stage.css";

const Stage = ({ onStageClick, onCloseClick }) => {
  const numTimes = 9;
  const folderStages = [];

  // Loop to create folderStages components
  for (let i = 1; i <= numTimes; i++) {
    folderStages.push(
      <div className="folderStages" key={i} onClick={onStageClick}>
        {/* Add onClick event here */}
        <button className="dropdown" type="button"></button>
        <div className="foldericon"></div>
        <p className="num">Stage {i}</p>
        <div className="clipboard"></div>
        <div className="i"></div>
      </div>
    );
  }

  return (
    <>
      {/* title */}
      <div className="stagebarwrap">
        <div className="heading">
          <p className="text ">Transaction Contents</p>
          <button
            className="icon"
            type="button"
            onClick={onCloseClick}
          ></button>
          {/* Add onClick event to close button */}
        </div>

        {/* folders */}
        <div className="folders">
          <div className="stages">
            <p className="ptext">12</p>
            <p className="pname">Stages</p>
          </div>

          <div className="stages">
            <p className="ptext">23</p>
            <p className="pname">Subfolder</p>
          </div>

          <div className="stages">
            <p className="ptext">1235</p>
            <p className="pname">Documents</p>
          </div>

          <div className="stageicon"></div>
        </div>

        {/* filters */}

        <div className="filter">
          <p className="filtertext">Filter by Client/Matter name</p>
          <div className="filtericon"></div>
        </div>

        {/* Render the folderStages */}
        {folderStages}
      </div>
    </>
  );
};

export default Stage;
