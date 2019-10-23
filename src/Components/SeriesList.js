import React from "react";

import "./styles/SeriesList.css";

const SeriesListItem = ({series})=>{

return(
    <React.Fragment>
        <li>
        {series.show.name}
        </li>
    </React.Fragment>
)

}



const SeriesList = props => {
  return (
    <React.Fragment>
      <ul className="SeriesList">
        {props.list.map(series => (
          <SeriesListItem
          series={series}
          key={series.show.id}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SeriesList;
