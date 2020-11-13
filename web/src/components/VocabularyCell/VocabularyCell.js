import Vocabulary from 'src/components/Vocabulary'

export const QUERY = gql`
  query FIND_VOCABULARY_BY_ID($id: String!) {
    vocabulary: vocabulary(id: $id) {
      id
      word
      furigana
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vocabulary not found</div>

export const Success = ({ vocabulary }) => {
  return <Vocabulary vocabulary={vocabulary} />
}
