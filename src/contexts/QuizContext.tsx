import React, { createContext, useState, ReactNode, useCallback, useContext } from 'react';
import { IQuiz } from '../data/types';
import { initialQuiz } from '../data/initData';

export interface QuizContextProps {
  quiz: IQuiz;
  currentQuestion: number;
  selectedAnswers: Map<number, number>;
  currentPage: 'Scores' | 'Quiz',
  setCurrentQuestion: (page: number) => void;
  updateQuiz: (quiz: IQuiz) => void;
  setSelectedAnswers: (map: Map<number, number>) => void
  setCurrentPage: (value: 'Scores' | 'Quiz') => void
  gradeCalculation: () => number
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode, questionIndex?: number }> = ({ children, questionIndex }) => {
  const [quiz, setQuiz] = useState<IQuiz>(initialQuiz);
  const [currentPage, setCurrentPage] = useState<'Scores' | 'Quiz'>('Quiz')
  const [currentQuestion, setCurrentQuestion] = useState<number>(questionIndex ?? 0);
  const [selectedAnswers, setSelectedAnswers] = useState<Map<number, number>>(new Map());
  // the key is the question index and the value is the specific option index that is selected by the user

  const gradeCalculation = useCallback(() => { 
    let score = 0
    const addedScorePerRightAnswer = Number((100 / quiz.questions.length).toFixed(2));
    quiz.questions.forEach((question, index) => {
      if (question.options[selectedAnswers.get(index)!]?.isRigthAnswer) {
        score += addedScorePerRightAnswer
      }
    })
    return score
  }, [quiz.questions, selectedAnswers])

  const updateQuiz = (newQuiz: IQuiz) => {
    setQuiz(newQuiz);
  };

  return (
    <QuizContext.Provider
      value={{
        quiz,
        currentQuestion,
        selectedAnswers,
        currentPage,
        setSelectedAnswers,
        setCurrentQuestion,
        updateQuiz,
        setCurrentPage,
        gradeCalculation
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


export const useQuiz = (): QuizContextProps => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};