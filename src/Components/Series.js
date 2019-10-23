import React, { Component } from "react";

import SeriesList from "./SeriesList";

class Series extends Component {
  state = {
    series: []
  };

//   componentDidMount() {
//     fetch("http://api.tvmaze.com/search/shows?q=Vikings")
//       .then(response => response.json())
//       .then(json => this.setState({ series: json }));
//   }

  onSeriesInputChange = e => {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json }));

    // console.log(e);
    // console.log(e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.onSeriesInputChange} />

        <SeriesList list={this.state.series} />
      </React.Fragment>
    );
  }
}

export default Series;
