import classNames from "classnames"
import { useQuiz } from "../contexts/QuizContext"

interface IOptionComponent {
  value: string
  optionIndexInQuestionOptions: number
}

const Option = (props: IOptionComponent) => {
  
  const { value, optionIndexInQuestionOptions: index } = props
  const { setSelectedAnswers, selectedAnswers, currentQuestion } = useQuiz()

  const onOptionClick = () => {
    const updatedAnswers = new Map(selectedAnswers);
    updatedAnswers.set(currentQuestion, index);
    setSelectedAnswers(updatedAnswers);
  }  

  return (
    <div
      data-testid='option'
      onClick={onOptionClick}
      className={classNames('option', selectedAnswers.get(currentQuestion) === index && 'option--selected')}
    >
      {value}
    </div>
  )
}

export default Option