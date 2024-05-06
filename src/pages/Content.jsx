import React from 'react'
import "./content.css"
import Table from './Table';
import Aside from './Aside';

const content = () => {
  return (
    <>
      <div className="full">
        {/* navigation */}
        <nav className="navigation">
          <button className="homebtn"></button>
          <div className="sideArrow"></div>
          <p className="navtext">CLIENT</p>
          <div className="sideArrow1"></div>
          <p className="navtext">MATTER</p>
          <div className="sideArrow1"></div>
          <p className="navtext3">TRANSACTION DETAIL PAGE</p>
          <div className="sideArrow1"></div>
          <p className="navtext4">TRANSACTION CONTENTS</p>
        </nav>
        {/* search  all selected folder*/}
        <div className="nav2">
          <div className="all">
            <div className="selectedFolder">
              <div className="folder"></div>
              <p className="folderText">All (selected folder)</p>
              <div className="selectdropdown">
                <div className="down"></div>
              </div>
            </div>
            <div className="search">
              <div className="searchicon"></div>
              <input
                type="text"
                className="searchbar"
                placeholder="Search within all folders and content, or a specific folder’s content"
              />
              <div className="mic"></div>
            </div>
          </div>

          <div className="all part2">
            <div className="selectedFolder">
              <div className="folder"></div>
              <p className="folderText">All (selected folder)</p>
              <div className="down downupdate"></div>
            </div>
          </div>

          <div className="all part3">
            <div className="server-line"></div>
          </div>

          <div className="all part3">
            <div className="download"></div>
          </div>

          <div className="all part3">
            <div className="filler"></div>
          </div>
        </div>

        <Table />
      </div>
      <div className="aside">
        <Aside />
      </div>
    </>
  );
}

export default content