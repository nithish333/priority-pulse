import React from "react";
import "./content.styles.css";
import AmbulanceImage from "../../assets/Ambulance.png";
import SideContent from "../sideContent/SideContentComponent";
import PatientForm from "../patientForm/patientFormComponent";

const Content = ({
  patientName,
  patientAge,
  Case,
  priorityLevel,
  contact,
  change,
  submit,
}) => (
  <div className="Content">
    <div className="sideContent">
      <SideContent image={AmbulanceImage} />
    </div>
    <div className="formContent">
      <PatientForm
        patientName={patientName}
        patientAge={patientAge}
        Case={Case}
        priorityLevel={priorityLevel}
        contact={contact}
        change={change}
        submit={submit}
      />
    </div>
  </div>
);

export default Content;
