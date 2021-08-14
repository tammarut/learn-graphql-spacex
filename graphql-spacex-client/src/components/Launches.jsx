import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import "bootstrap/dist/css/bootstrap.min.css";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches(limit: 10) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  console.log("🐡data:", data);
  if (error) {
    console.log("❌error:", error);
  }

  return (
    <>
      {loading ? (
        <h4>Loading..</h4>
      ) : (
        <div className="container">
          <h1 className="display-4 my-3"> Launches</h1>
          {data.launches.map((launch) => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))}
        </div>
      )}
    </>
  );
}

export default Launches;
