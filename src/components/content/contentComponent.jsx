import React from "react";
import "./content.styles.css";
import AmbulanceImage from "../../assets/Ambulance.png";
import SideContent from "../sideContent/SideContentComponent";
import PatientForm from "../patientForm/patientFormComponent";

const Content = () => (
  <div className="Content">
    <div className="sideContent">
      <SideContent image={AmbulanceImage} />
    </div>
    <div className="formContent">
      <PatientForm />
    </div>
  </div>
);

export default Content;
