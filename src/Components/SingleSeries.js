import React, { Component } from "react";
import Loader from "./Loader";

export default class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <h1>{show.name}</h1>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episodes - {show._embedded.episodes.length}</p>
            <p>
              <img alt="Show" src={show.image.medium} />
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}
