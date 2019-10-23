import React, { Component } from "react";

import SeriesList from "./SeriesList";

class Series extends Component {
  state = {
    series: []
  };

  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }

  render() {
    return (<React.Fragment>
        {/* Length of the series array - {this.state.series.length} */}
        <SeriesList
        list={this.state.series}
        />
    </React.Fragment>);
  }
}

export default Series;
