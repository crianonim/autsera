import React from "react";
import "./HelperAvatar.scss";

const HelperAvatar = ({ speechText, helpText, timeOut, answerClickCount }) => {
  let [displaySomething, setdisplaySomething] = React.useState(true);
  let [showHint, setshowHint] = React.useState(false);
  let [clickCount, setclickCount] = React.useState(0);
  React.useEffect(() => {
    setdisplaySomething(true);
    const timer = setTimeout(() => {
      setdisplaySomething(false);
    }, timeOut);
    return () => clearTimeout(timer);
  }, [setdisplaySomething, showHint, clickCount, speechText, answerClickCount]);

  // if new speeText is passed then stop showing hint and show text instead
  React.useEffect(() => {
    setshowHint(false);
  }, [speechText]);

  let toggleshowHint = e => {
    setdisplaySomething(true);
    setshowHint(true);
    setclickCount(clickCount => clickCount + 1);
  };

  return (
    <div className="helper-avatar-container">
      <img
        className="helper-avatar"
        alt="helper-avatar"
        onClick={toggleshowHint}
      ></img>
      {displaySomething && speechText && !showHint ? (
        <div className="speech-box">{speechText}</div>
      ) : null}
      {displaySomething && helpText && showHint ? (
        <div className="speech-box">{helpText}</div>
      ) : null}
    </div>
  );
};

export default HelperAvatar;
