import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import InteractionPage from "./InteractionPage";
import { BrowserRouter as Router } from "react-router-dom";
import data from "../../data/data";

afterEach(cleanup);

test("The Interaction Page renders", () => {
  render(
    <Router>
      <InteractionPage id="1" />
    </Router>
  );
});

test("Game starts from scratch when user re-enters page", () => {
  const { getByText, getByLabelText, getByTestId } = render(
    <Router>
      <InteractionPage id="1" />
    </Router>
  );
  const answers = data.places[0].interactions[0].answers;
  answers.map(answer =>
    expect(getByText(answer.text).className).toBe("option")
  );
});
