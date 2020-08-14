import React from "react";
import "./patientForm.styles.css";

const PatientForm = () => (
  <div className="PatientFormWrapper">
    <form className="patientForm">
      <p className="formTitle">Patient Details</p>
      <p className="fillDetails">Fill the Details Below</p>

      <input
        type="text"
        className="patientName inputTag"
        placeholder="Patient Name"
      />
      <input type="text" className="inputTag" placeholder="Patient Age" />
      <input type="text" className="inputTag" placeholder="Case" />
      <input type="text" className="inputTag" placeholder="Priority Level" />
      <input type="text" className="inputTag" placeholder="Contact" />
      <input type="submit" className="submitBtn" value="Submit" />
      <p style={{ fontSize: "16px" }}>Getting problem in submitting</p>
      <input type="submit" className="trackPatientBtn" value="Track Patient" />
    </form>
  </div>
);

export default PatientForm;
