import Quiz from './Quiz'

export const QUERY = gql`
  query KanjiQuiz($character: String!) {
    findVocabularies(character: $character) {
      Vocabulary {
        word
        furigana
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ findVocabularies: result }) => {
  return <Quiz vocabularies={result} />
}

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'network-only' }
}
