import React from "react";
import RouterLink from "../reusable/RouterLink";

const InteractionCircle = ({ interaction, isCompleted, isUnlocked, setspeechText, completed }) => {
  let interactionStyle = {
    position: "absolute",
    top: interaction.coordinates[0] + "%",
    right: interaction.coordinates[1] + "%",
  };
  const changeMessageIfLocked = () => {
    if (!isUnlocked)
      setspeechText(
        `This Interaction is locked, but you only need 
        ${interaction.requiredStars - completed.length} more stars to unlock it!`
      );
  };
  return (
    <div
      style={interactionStyle}
      className={
        "interaction-circle " +
        (isCompleted ? "completed" : "not-completed") +
        " " +
        (isUnlocked ? "unlocked" : "locked")
      }
      onClick={changeMessageIfLocked}
    >
      {!isUnlocked ? <img style={{ position: "absolute", opacity: 0.7, top: "-50%" }} src="/SVG/question.svg" /> : null}
      <RouterLink
        title={interaction.text}
        label={interaction.text}
        to={isUnlocked ? "/interaction/" + interaction.id : "#"}
      />
    </div>
  );
};

export default InteractionCircle;
