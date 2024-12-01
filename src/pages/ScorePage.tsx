import { useQuiz } from "../contexts/QuizContext";

const ScorePage = () => {
  const { gradeCalculation: gradeCalc } = useQuiz()
  return <p className="score-page--text" test-dataid='score-page'>
      Your score: <strong>{gradeCalc()}</strong>
    </p>;
};

export default ScorePage;
