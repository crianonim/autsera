import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.scss";
import data from "../../data/data";
import PlaceCircle from "./PlaceCircle";
const MapPage = ({ completed }) => {
  return (
    <div className="map-background">
      <RouterLink className="btn-back" to="/" label="Go Back" />
      <div className="hud">
        <span className="signpost">AUTSERA LAND</span>
      </div>

      {data.places.map(place => (
        <PlaceCircle key={place.id} place={place} completed={completed} />
      ))}
    </div>
  );
};

export default MapPage;
