import QuizCell from 'src/components/Quiz/QuizCell'
import './quiz.css'

const QuizPage = ({ character }) => {
  return <QuizCell character={decodeURI(character)} />
}

export default QuizPage
