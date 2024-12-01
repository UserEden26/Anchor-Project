import { useQuiz } from "../contexts/QuizContext"
import ScorePage from "./ScorePage"
import QuestionPage from "./QuestionPage"
import { useMemo } from "react"

const PageSelector = () => {
  const { currentPage } = useQuiz()
  
  const page = useMemo(() => currentPage == 'Quiz' ? <QuestionPage /> : <ScorePage />, [currentPage])
  return (
    <main>
      {page}
    </main>
  )
}

export default PageSelector