import React from "react";

import "./styles/SeriesList.css";
import {Link} from 'react-router-dom';


const SeriesListItem = ({ series }) => {
  return (
    <React.Fragment>
      <li>
        <Link to={`/series/${series.show.id}`}>
            {series.show.name}
        </Link>
      </li>
    </React.Fragment>
  );
};

const SeriesList = props => {
  return (
    <React.Fragment>
      <ul className="SeriesList">
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SeriesList;
