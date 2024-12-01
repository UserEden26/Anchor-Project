import React, { useMemo } from "react"
import { useQuiz } from "../contexts/QuizContext"
import QuestionPageNavigation from "../components/QuestionPageNavigation"
import Option from "../components/Option"

const QuestionPage = () => {
  const { currentQuestion: currentQuestionIndex, quiz } = useQuiz()

  const currentQuestion = useMemo(() => {    
    return quiz.questions[currentQuestionIndex]
  }, [currentQuestionIndex, quiz.questions])
  
  const optionsElements = <div className="options">
    {currentQuestion.options.map((option, index) => {
    return <Option key={`question-${currentQuestionIndex}--option-${index}`}
      optionIndexInQuestionOptions={index}
      value={option.value} />
      })}
    </div>
  
  return (  
    <div data-testid='question-page'>
      <h4>Question number: {currentQuestionIndex+1}</h4>
      <strong>{currentQuestion.question}</strong>
      {optionsElements}
      <QuestionPageNavigation />
    </div>
  )
}

export default QuestionPage