import React from "react";

const Intro = props => {
  return (
    <p className="App-intro">
      {props.message}
      <br />
      {props.content}
    </p>
  );
};

export default Intro;
