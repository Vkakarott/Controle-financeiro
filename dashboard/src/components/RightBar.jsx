import React from "react";
import './RightBar.css';

function RightBar() {
  return (
    <div className="rightbar">
      <div className="profile">
        <div className="profile-name">
          <h2>John Doe</h2>
          <p>Software Engineer</p>
        </div>
        <div className="profile-image">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="profile"/>
        </div>
      </div>
      <div className="historico">

      </div>
      <div className="calendar">

      </div>
    </div>
  );
}

export default RightBar;