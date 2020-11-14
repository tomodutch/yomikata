import KanjiOverview from './KanjiOverview'

export const QUERY = gql`
  query KanjiOverviewQuery($jlpt: Int) {
    getKanji(jlpt: $jlpt) {
      character
      jlpt
      frequency
      meaning
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ getKanji: result }) => (
  <KanjiOverview kanji={result} />
)

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'network-only' }
}
