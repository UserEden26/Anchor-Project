import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

const QuestionPageNavigation = () => {
  const { currentQuestion, setCurrentQuestion, selectedAnswers, setCurrentPage, quiz } = useQuiz();
  const isLastQuestion = currentQuestion + 1 === quiz.questions.length;
  
  const prevHandler = () => setCurrentQuestion(currentQuestion - 1);
  const nextHandler = () => setCurrentQuestion(currentQuestion + 1);
  const submitHandler = () => setCurrentPage("Scores");

  return (
    <nav>
      {currentQuestion !== 0 && (
        <Button
          text="Previous"
          data-testid="previous-button"
          onClick={prevHandler}
        />
      )}

      <Button
        disabled={selectedAnswers.get(currentQuestion) === undefined}
        data-testid="next-submit-button"
        text={!isLastQuestion ? "Next" : "Submit"}
        onClick={!isLastQuestion ? nextHandler : submitHandler}
      />
    </nav>
  );
};

export default QuestionPageNavigation;
