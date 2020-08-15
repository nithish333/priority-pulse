import React from "react";
import "./patientForm.styles.css";

const PatientForm = ({
  patientName,
  patientAge,
  Case,
  priorityLevel,
  contact,
  change,
  submit,
}) => (
  <div className="PatientFormWrapper">
    <form className="patientForm" onSubmit={submit}>
      <p className="formTitle">Patient Details</p>
      <p className="fillDetails">Fill the Details Below</p>

      <input
        type="text"
        className="patientName inputTag"
        value={patientName}
        placeholder="Patient Name"
        name="patientName"
        onChange={change}
        required
      />
      <input
        type="text"
        className="inputTag"
        value={patientAge}
        placeholder="Patient Age"
        name="patientAge"
        onChange={change}
        required
      />
      <input
        type="text"
        className="inputTag"
        value={Case}
        name="Case"
        placeholder="Case"
        onChange={change}
        required
      />
      <input
        type="text"
        className="inputTag"
        value={priorityLevel}
        name="priorityLevel"
        placeholder="Priority Level"
        onChange={change}
        required
      />
      <input
        type="text"
        className="inputTag"
        value={contact}
        name="contact"
        placeholder="Contact"
        onChange={change}
        required
      />
      <button className="submitBtn">Submit</button>
      <p style={{ fontSize: "16px" }}>Getting problem in submitting</p>
      <input type="submit" className="trackPatientBtn" value="Track Patient" />
    </form>
  </div>
);

export default PatientForm;
