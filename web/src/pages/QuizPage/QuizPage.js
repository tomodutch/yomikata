import QuizCell from 'src/components/Quiz/QuizCell'

const QuizPage = ({ character }) => {
  return (
    <div className="container">
      <QuizCell character={decodeURI(character)} />
    </div>
  )
}

export default QuizPage
