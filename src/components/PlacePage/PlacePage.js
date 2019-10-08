import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import InteractionCircle from "./InteractionCircle";
import Stars from "../reusable/Stars";
import {countStarsInPlace} from "../../utils/starsCounting";

const PlacePage = ({ id, completed }) => {
  const placeData = data.places.find(place => place.id === Number(id));

  return (
    <div style={{ backgroundImage: `url(/img/${placeData.image})` }}>
      <h2>{placeData.text}</h2>
      <RouterLink to="/map" label="Go Back" />
      {/* Sample Stars Component */}
      <Stars {...countStarsInPlace(id, completed)} />
      {placeData.interactions.map(interaction => (
        <InteractionCircle key={interaction.id} interaction={interaction} isCompleted={completed.includes(interaction.id)} />
      ))}
    </div>
  );
};

export default PlacePage;
