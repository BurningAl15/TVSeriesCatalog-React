import React from "react";

import loader from "../Images/Spinner.gif";

const Loader = props => {
  return (
    <React.Fragment>
      <img style={{ width: 75 }} src={loader} alt="loader Icon" />
    </React.Fragment>
  );
};

export default Loader;
