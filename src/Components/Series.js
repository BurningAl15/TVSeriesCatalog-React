import React, { Component } from "react";

import SeriesList from "./SeriesList";

import Loader from "./Loader";
class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    //Without this line, whaterver you write in the input form will not be showed
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <React.Fragment>
        <input
          value={seriesName}
          type="text"
          onChange={this.onSeriesInputChange}
        />
        <div>
          {!isFetching && series.length === 0 && seriesName.trim() === "" && (
            <p>Please enter series name into the input</p>
          )}
          {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
            <p> No Tv series have been found with this name</p>
          )}

          {isFetching && <Loader />}
          {!isFetching && <SeriesList list={this.state.series} />}
        </div>
      </React.Fragment>
    );
  }
}

export default Series;
