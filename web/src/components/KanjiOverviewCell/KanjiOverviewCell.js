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

export const Success = ({ getKanji: result }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Jlpt</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {result.map((kanji, key) => (
          <tr key={key}>
            <td>{kanji.character}</td>
            <td>{kanji.jlpt}</td>
            <td>{kanji.frequency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'network-only' }
}
