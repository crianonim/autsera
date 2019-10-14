import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Hint from "./Hint";

it("renders a Hint with correct text", () => {
  const { getByLabelText } = render(
    <Hint answers={[]} hint={{ text: "hin1" }} />
  );
  const input = getByLabelText("Text:");
  expect(input.value).toBe("hin1");
});

it("renders a Hint with correct answers texts and checked boxes correctly", () => {
  const { getByLabelText } = render(
    <Hint
      answers={[
        { text: "op1", correct: true, id: 1 },
        { text: "op2", correct: false, id: 2 }
      ]}
      hint={{ text: "hin1", answers: [1] }}
    />
  );
  const input1 = getByLabelText("op1");
  expect(input1.checked).toBe(true);
  const input2 = getByLabelText("op2");
  expect(input2.checked).toBe(false);
});
it("triggers setHint when editing text value", () => {
  const setHint = jest.fn();
  const { getByLabelText } = render(
    <Hint answers={[]} setHint={setHint} hint={{ text: "hin1" }} />
  );
  const input = getByLabelText("Text:");
  fireEvent.change(input, { target: { value: "hint2" } });
  expect(setHint).toHaveBeenCalledTimes(1);
  expect(setHint).toHaveBeenCalledWith({ text: "hint2" });
});
it("triggers setHint when clicking on checkboxes correctly", () => {
  const setHint = jest.fn();
  const { getByLabelText } = render(
    <Hint
      setHint={setHint}
      answers={[
        { text: "op1", correct: true, id: 1 },
        { text: "op2", correct: false, id: 2 }
      ]}
      hint={{ text: "hin1", answers: [1] }}
    />
  );
  const input1 = getByLabelText("op1");
  fireEvent.click(input1);
  expect(setHint).toHaveBeenCalledTimes(1);
  expect(setHint).toHaveBeenCalledWith({ text: "hin1", answers: [] });
  const input2 = getByLabelText("op2");
  fireEvent.click(input2);
  expect(setHint).toHaveBeenCalledTimes(2);
  expect(setHint).toHaveBeenLastCalledWith({ text: "hin1", answers: [1, 2] });
});
