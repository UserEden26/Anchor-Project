import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import ScorePage from '../../src/pages/ScorePage';
import * as QuizContext from '../../src/contexts/QuizContext';
import "@testing-library/jest-dom/vitest";

describe('ScorePage', () => {
  it('should display the correct score', () => {
    const mockGradeCalc = vi.fn(() => 80);
    vi.spyOn(QuizContext, 'useQuiz').mockReturnValue({
      gradeCalculation: mockGradeCalc,
    } as any);

    render(<ScorePage />);

    const scoreElement = screen.getByText(/Your score:/i);
    expect(scoreElement).toBeInTheDocument();

    const actualScore = screen.getByText('80');
    expect(actualScore).toBeInTheDocument();

    expect(mockGradeCalc).toHaveBeenCalledTimes(1);

    vi.restoreAllMocks();
  });
});
