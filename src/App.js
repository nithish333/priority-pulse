import React from "react";
import "./App.css";
import Header from "./components/header/headerComponent";
import Content from "./components/content/contentComponent";
import Table from "./components/Table/TableComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      patientName: "",
      patientAge: "",
      Case: "",
      priorityLevel: "",
      contact: "",
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    // console.log(event.target.value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Clicked");
    const {
      patientName,
      patientAge,
      Case,
      priorityLevel,
      contact,
    } = this.state;

    let patientsArray = [...this.state.patients];

    patientsArray.push({
      patientName,
      patientAge,
      Case,
      priorityLevel,
      contact,
    });

    this.setState({
      patientName: "",
      patientAge: "",
      Case: "",
      priorityLevel: "",
      contact: "",
      patients: patientsArray,
    });
    console.log(patientsArray);
  };
  render() {
    const {
      patientName,
      patientAge,
      Case,
      priorityLevel,
      contact,
      patients,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Content
          patientName={patientName}
          patientAge={patientAge}
          Case={Case}
          priorityLevel={priorityLevel}
          contact={contact}
          change={(event) => this.handleInputChange(event)}
          submit={(event) => this.handleSubmit(event)}
        />
        <Table patients={patients} />
      </div>
    );
  }
}

export default App;
