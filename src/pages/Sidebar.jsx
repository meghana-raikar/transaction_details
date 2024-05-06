import React from 'react'
import './sidebar.css'

const Sidebar = ({onLogoClick}) => {
  return (
    <>
      <div className="logowrap" onClick={onLogoClick}>
        <div className="logo"></div>
        <p className="transaction">Transaction</p>
      </div>

      <div className="allicons">
        <div className="panoramalogo"></div>
        <p className="panoramatext ">Panorama</p>
      </div>

      <div className="allicons">
        <div className="transactionlogo"></div>
        <p className="transactiontext">Panorama</p>
      </div>

      <div className="allicons">
        <div className="documentslogo"></div>
        <p className="documentstext ">Documents</p>
      </div>

      <div className="allicons">
        <div className="emaillogo"></div>
        <p className="emailtext">E-mails</p>
      </div>

      <div className="allicons">
        <div className="reportslogo"></div>
        <p className="reportstext">Reports</p>
      </div>

      <div className="allicons">
        <div className="managementlogo"></div>
        <p className="managementtext ">Management Panel</p>
      </div>

      <div className="allicons">
        <div className="calenderlogo"></div>
        <p className="calendertext">Tranasaction Calender</p>
      </div>

      <div className="profile"></div>
    </>
  );
}

export default Sidebar