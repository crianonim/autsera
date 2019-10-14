import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Answer from "./Answer";

it("renders Answer with correct text text", () => {
  const { getByLabelText } = render(<Answer answer={{ text: "op1" }} />);
  const input = getByLabelText("Answer:");
  expect(input.value).toBe("op1");
});
it("renders Answer with correct response text", () => {
  const { getByLabelText } = render(<Answer answer={{ response: "res1" }} />);
  const input = getByLabelText("Response:");
  expect(input.value).toBe("res1");
});
it("renders Answer with correct correct checkbox value", () => {
  const { getByLabelText } = render(<Answer answer={{ correct: true }} />);
  const input = getByLabelText("Correct:");
  expect(input.checked).toBe(true);
});
it("fires setAnswer when changed text value", () => {
  const setAnswer = jest.fn();
  const { getByLabelText } = render(
    <Answer setAnswer={setAnswer} answer={{ text: "op1" }} />
  );
  const input = getByLabelText("Answer:");
  fireEvent.change(input, { target: { value: "option2" } });
  expect(setAnswer).toHaveBeenCalledTimes(1);
  expect(setAnswer).toHaveBeenCalledWith({ text: "option2" });
});
it("fires setAnswer when changed response value", () => {
  const setAnswer = jest.fn();
  const { getByLabelText } = render(
    <Answer setAnswer={setAnswer} answer={{ response: "res1" }} />
  );
  const input = getByLabelText("Response:");
  fireEvent.change(input, { target: { value: "response2" } });
  expect(setAnswer).toHaveBeenCalledTimes(1);
  expect(setAnswer).toHaveBeenCalledWith({ response: "response2" });
});
it("fires setAnswer when changed checkbox correct value", () => {
  const setAnswer = jest.fn();
  const { getByLabelText } = render(
    <Answer setAnswer={setAnswer} answer={{ correct: true }} />
  );
  const input = getByLabelText("Correct:");
  fireEvent.click(input);
  expect(setAnswer).toHaveBeenCalledTimes(1);
  expect(setAnswer).toHaveBeenCalledWith({ correct: false });
});
