import React from "react";
import "./App.css";
import Header from "./components/header/headerComponent";
import Content from "./components/content/contentComponent";
import Table from "./components/Table/TableComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Table />
      </div>
    );
  }
}

export default App;
