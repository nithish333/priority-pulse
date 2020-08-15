import React from "react";
import "./Table.styles.css";

const Table = ({ patients }) => (
  <div className="Table">
    <table className="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Patient Name</th>
          <th>Patient Age</th>
          <th>Case</th>
          <th>Contact</th>
          <th>Priority Level</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{patient.patientName}</td>
            <td>{patient.patientAge}</td>
            <td>{patient.Case}</td>
            <td>{patient.contact}</td>
            <td>{patient.priorityLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;

// <tr>
// <td>1</td>
// <td>Nithish</td>
// <td>38</td>
// <td>Accident</td>
// <td>9343483932</td>
// <td>4</td>
// </tr>
// <tr>
// <td>2</td>
// <td>Kiran</td>
// <td>42</td>
// <td>High BP</td>
// <td>9808390438</td>
// <td>5</td>
// </tr>
// <tr>
// <td>2</td>
// <td>Kiran</td>
// <td>42</td>
// <td>High BP</td>
// <td>9808390438</td>
// <td>5</td>
// </tr>
