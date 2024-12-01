import PageSelector from "./pages/PageSelector"
import { QuizProvider } from "./contexts/QuizContext"

function App() {
  return <QuizProvider>
      <PageSelector />
    </ QuizProvider>
}

export default App
