import React from "react";
import "./App.css";
import "whatwg-fetch";

import Main from "./Components/Main";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Main />
        {/* <Series /> */}
      </div>
    );
  }
}

export default App;
