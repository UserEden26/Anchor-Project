import React from 'react'
import { render, screen, cleanup } from "@testing-library/react";
import { it, describe, afterEach, vi, expect } from "vitest";
import "@testing-library/jest-dom";
import { QuizProvider } from '../../src/contexts/QuizContext';
import QuestionPage from "../../src/pages/QuestionPage";
import { initialQuiz } from '../../src/data/initData';

vi.mock("../../src/components/QuestionPageNavigation", () => ({
  __esModule: true,
  default: () => <div data-testid="question-page-navigation">Navigation</div>,
}));

describe("QuestionPage", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("should renders the correct question", () => {
    render(
      <QuizProvider>
        <QuestionPage />
      </QuizProvider>
    );

    const header = screen.getByRole("heading", { name: /Question number/i });
    expect(header).toHaveTextContent("Question number: 1");

    const questionText = screen.getByText(initialQuiz.questions[0].question);
    expect(questionText).toBeInTheDocument();
  });

  it("should renders all the options for the current question", () => {
    render(
      <QuizProvider>
        <QuestionPage />
      </QuizProvider>
    );

    initialQuiz.questions[0].options.forEach((option) => {
      const optionElement = screen.getByText(option.value);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("should renders the navigation component", () => {
    render(
      <QuizProvider>
        <QuestionPage />
      </QuizProvider>
    );

    const navigation = screen.getByTestId("question-page-navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("displays the correct question when 'currentQuestion' changes", () => {
    const secondQuestion = initialQuiz.questions[1];

    render(
      <QuizProvider questionIndex={1}>
        <QuestionPage />
      </QuizProvider>
    );

    const questionText = screen.getByText(secondQuestion.question);
    expect(questionText).toBeInTheDocument();

    secondQuestion.options.forEach((option) => {
      const optionElement = screen.getByText(option.value);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
