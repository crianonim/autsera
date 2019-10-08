import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";

const InteractionPage = ({ id }) => {
  let interactionObj = data.places.reduce((interactionObj, currentPlace) => {
    let foundInteraction = currentPlace.interactions.find(
      interaction => interaction.id === Number(id)
    );
    return foundInteraction ? foundInteraction : interactionObj;
  }, {});

  return (
    <div
      className="interaction-background"
      style={{ backgroundImage: `url(/img/${interactionObj.image})` }}
    >
      <h2>{interactionObj.text}</h2>
      <ul>
        {interactionObj.answers.map(answer => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
      <RouterLink to="/" label="Go Back" />
    </div>
  );
};

export default InteractionPage;

// {data.places.map(interaction => <Something key={interaction.id} label={place.text} />)}
