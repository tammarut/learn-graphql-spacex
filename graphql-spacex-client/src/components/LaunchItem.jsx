import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LaunchItem(props) {
  const { launch } = props;
  const {
    flight_number,
    mission_name,
    launch_year,
    launch_date_local,
    launch_success,
  } = launch;

  return (
    <div classname="card mb-3">
      <div className="card-body">
        <div classname="row">
          <div className="col-9">
            <h4>Mission: {mission_name}</h4>
            <p>Date: {launch_date_local} </p>
          </div>

          <div className="col-3">
            <button className="btn btn-secondary">Launch Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchItem;
