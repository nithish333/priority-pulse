import React from "react";
import "./SideContent.styles.css";

const SideContent = ({ image }) => (
  <div className="SideContentWrapper">
    <img src={image} alt="Ambulance" className="ambulanceImage" />
    <p className="sideData">
      An Issue that is never-ending in our country is the traffic
      <br />
      The Core problem with traffic arises when an ambulance tries to cross over{" "}
      <br />
      Our Team Priority Pulse is reaching out to this issue with a
      Priority-based solution
    </p>
  </div>
);

export default SideContent;
