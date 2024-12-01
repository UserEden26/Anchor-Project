import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { useQuiz } from "../../src/contexts/QuizContext";
import Option from '../../src/components/Option';
import "@testing-library/jest-dom/vitest";

vi.mock("../../src/contexts/QuizContext", () => ({
  useQuiz: vi.fn(),
}));

describe("Option component", () => {
  it("renders with the correct text", () => {
    (useQuiz as Mock).mockReturnValue({
      setSelectedAnswers: vi.fn(),
      selectedAnswers: new Map(),
      currentQuestion: 1,
    });

    render(<Option value="Option 1" optionIndexInQuestionOptions={0} />);

    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("updates selectedAnswers when clicked", () => {
    const setSelectedAnswersMock = vi.fn();
    const mockSelectedAnswers = new Map([[1, 2]]);

    (useQuiz as Mock).mockReturnValue({
      setSelectedAnswers: setSelectedAnswersMock,
      selectedAnswers: mockSelectedAnswers,
      currentQuestion: 1,
    });

    render(<Option value="Option 2" optionIndexInQuestionOptions={0} />);

    const option = screen.getByText("Option 2");
    fireEvent.click(option);

    // check if setSelectedAnswers is called with the updated map
    expect(setSelectedAnswersMock).toHaveBeenCalledWith(
      new Map([[1, 0]]) // current question (1) with selected option index (0)
    );
  });

  it("applies the 'option--selected' class when the option is selected", () => {
    (useQuiz as Mock).mockReturnValue({
      setSelectedAnswers: vi.fn(),
      selectedAnswers: new Map([[1, 0]]), // Option 0 is selected for question 1
      currentQuestion: 1,
    });

    render(<Option value="Option 3" optionIndexInQuestionOptions={0} />);

    const option = screen.getByText("Option 3");

    expect(option).toHaveClass("option--selected");
  });

  it("does not apply the 'option--selected' class when the option is not selected", () => {
    (useQuiz as Mock).mockReturnValue({
      setSelectedAnswers: vi.fn(),
      selectedAnswers: new Map([[1, 2]]),
      currentQuestion: 1,
    });

    render(<Option value="Option 4" optionIndexInQuestionOptions={0} />);

    const option = screen.getByText("Option 4");

    expect(option).not.toHaveClass("option--selected");
  });
});
