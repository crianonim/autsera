import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import "./interactionpage.scss";
import HelperAvatar from "../reusable/HelperAvatar";
import { findByLabelText } from "@testing-library/dom";

const InteractionPage = ({ id, setCompleted }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [helpText, setHelpText] = useState(null);
  const [speechText, setSpeechText] = useState(null);
  const [answerClickCount, setAnswerClickCount] = React.useState(0);
  const [starSpeech, setStarSpeech] = useState(null);

  let interactionObj = data.places.reduce((interactionObj, currentPlace) => {
    let foundInteraction = currentPlace.interactions.find(
      interaction => interaction.id === id
    );
    return foundInteraction ? foundInteraction : interactionObj;
  }, {});

  let addStar = (id, array) => {
    setStarSpeech(
      <div className="star-popup">
        <svg viewBox="0 0 51 48" fill={"#fde74c"} stroke="black" width="60px">
          <title>{"Full Star"}</title>
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
        <span>Well done, you have gained a star</span>
      </div>
    );
    return array.concat(id);
  };

  let shuffledAnswers = interactionObj.answers;
  let image = interactionObj.image + ".png";

  useEffect(() => {
    let shuffleArray = array => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
    shuffledAnswers = shuffleArray(interactionObj.answers);
  }, [interactionObj.answers]);

  let placeObj = data.places.find(place =>
    place.interactions.includes(interactionObj)
  );

  useEffect(() => {
    const correctAnswersIds = interactionObj.answers
      .filter(answer => answer.correct)
      .map(answer => answer.id);

    // update hint
    const unAnsweredCorrectIds = correctAnswersIds.filter(
      ca => !selectedAnswers.includes(ca)
    );
    const hintedAnswerId =
      unAnsweredCorrectIds[
        Math.floor(Math.random() * unAnsweredCorrectIds.length)
      ];
    const hint = interactionObj.hints.find(hint =>
      hint.answers.includes(hintedAnswerId)
    );
    if (hint) {
      setHelpText(hint.text);
    } else {
      setHelpText("");
    }
    // console.log({ unAnsweredCorrectIds });
    // all answers are correctly guessed
    if (
      correctAnswersIds.every(correctId => selectedAnswers.includes(correctId))
    ) {
      // TODO instead of below it should trigger some animation like star popping up
      // setSpeechText("Well done!");
      setCompleted(completed =>
        completed.includes(id) ? completed : addStar(id, completed)
      );
    }
  }, [selectedAnswers]);

  const style = {
    backgroundImage: `url(/SVG/${placeObj.text}.svg)`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <div className="interaction-background" style={style}>
      <div className="hud">
        <RouterLink
          className="btn-back"
          to={"/place/" + placeObj.id}
          label="Go Back"
          title="Go Back"
        />
        <span className="signpost">{interactionObj.text}</span>
      </div>
      <h2 className="interaction-question">{interactionObj.question[0]}</h2>
      <h3 className="interaction-instruction">{interactionObj.question[1]}</h3>
      <ul>
        <li className="grid-center">
          <img src={image} className="interaction-image" />
        </li>
        {shuffledAnswers.map(answer => (
          <li key={answer.id}>
            <button
              className={
                selectedAnswers.includes(answer.id)
                  ? "btn-answer selected"
                  : "btn-answer option"
              }
              onClick={() => {
                if (answer.correct && !selectedAnswers.includes(answer.id)) {
                  setSelectedAnswers([...selectedAnswers, answer.id]);
                } else {
                }
                // console.log(answer.response);
                setAnswerClickCount(click => click + 1);
                setSpeechText(answer.response);
              }}
            >
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
      {starSpeech}
      <HelperAvatar
        speechText={speechText}
        helpText={helpText}
        timeOut={4000}
        answerClickCount={answerClickCount}
      />
    </div>
  );
};

export default InteractionPage;
