import React from "react";
import "./Table.styles.css";

const Table = () => (
  <div className="Table">
    <table className="table">
      <tr>
        <th>S.No</th>
        <th>Patient Name</th>
        <th>Patient Age</th>
        <th>Case</th>
        <th>Contact</th>
        <th>Priority Level</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Nithish</td>
        <td>38</td>
        <td>Accident</td>
        <td>9343483932</td>
        <td>4</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Kiran</td>
        <td>42</td>
        <td>High BP</td>
        <td>9808390438</td>
        <td>5</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Kiran</td>
        <td>42</td>
        <td>High BP</td>
        <td>9808390438</td>
        <td>5</td>
      </tr>
    </table>
  </div>
);

export default Table;
