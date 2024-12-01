import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom";
import { QuizProvider } from '../../src/contexts/QuizContext';
import QuestionPage from '../../src/pages/QuestionPage';


describe('QuestionPage Integration Tests', () => {  
  it('should keep the selected value when clicking on the "Previous" button', () => {
    render(
      <QuizProvider>
        <QuestionPage />
      </QuizProvider>
    );

    const firstOption = screen.getAllByTestId('option')[0];
    fireEvent.click(firstOption);

    const nextButton = screen.getByTestId('next-submit-button');
    fireEvent.click(nextButton);

    const prevButton = screen.getByTestId('previous-button');
    fireEvent.click(prevButton);

    const selectedOption = screen.getAllByTestId('option')[0];
    expect(selectedOption).toHaveClass('option--selected');
  });
});
