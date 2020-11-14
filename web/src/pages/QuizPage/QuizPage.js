import QuizCell from 'src/components/Quiz/QuizCell'

const QuizPage = ({ character }) => {
  return <QuizCell character={decodeURI(character)} />
}

export default QuizPage
