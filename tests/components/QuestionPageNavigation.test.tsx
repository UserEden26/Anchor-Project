import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { it, expect, describe, afterEach } from 'vitest'
import "@testing-library/jest-dom/vitest";
import { QuizProvider } from '../../src/contexts/QuizContext';
import QuestionPageNavigation from '../../src/components/QuestionPageNavigation';
import { initialQuiz } from '../../src/data/initData';

describe('QuestionPageNavigation', () => {
    afterEach(() => {
        cleanup();
    });
      
    it('should have the next-submit button with text "Next" when the current question is not the last question', () => {
        render( 
            <QuizProvider>
                <QuestionPageNavigation />
            </QuizProvider>
        )
        const button = screen.getByTestId('next-submit-button')
        expect(button).toHaveTextContent('Next')
    })

    it('should have the next-submit button with "Submit" text on the last question', () => {
        render( 
            <QuizProvider questionIndex={initialQuiz.questions.length-1}>
                <QuestionPageNavigation />
            </QuizProvider>
        )
        const button = screen.getByTestId('next-submit-button')
        expect(button).toHaveTextContent('Submit')
    })

    it('should not display the "Previous" button on the first question', () => {
        render( 
            <QuizProvider>
                <QuestionPageNavigation />
            </QuizProvider>
        )
        const prevButton = screen.queryByRole('button', { name: 'Previous' });
        expect(prevButton).toBeNull();
    })
    
    it('"Next" button should be disable if no option is selected option', () => {
        render(
            <QuizProvider>
                <QuestionPageNavigation />
            </QuizProvider>
        )
        const nextButton = screen.getByTestId('next-submit-button');
        expect(nextButton).toBeDisabled();
    })
})