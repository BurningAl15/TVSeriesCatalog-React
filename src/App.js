import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "whatwg-fetch";
import Intro from "./Components/Intro";
import Series from "./Components/Series";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro
          message="Hey Whatsapp dude?"
          content="Here you can find all of your most loved series"
        />
        <Series />
      </div>
    );
  }
}

export default App;
