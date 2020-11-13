import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VocabularyForm from 'src/components/VocabularyForm'

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
const UPDATE_VOCABULARY_MUTATION = gql`
  mutation UpdateVocabularyMutation(
    $id: String!
    $input: UpdateVocabularyInput!
  ) {
    updateVocabulary(id: $id, input: $input) {
      id
      word
      furigana
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ vocabulary }) => {
  const { addMessage } = useFlash()
  const [updateVocabulary, { loading, error }] = useMutation(
    UPDATE_VOCABULARY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vocabularies())
        addMessage('Vocabulary updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateVocabulary({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vocabulary {vocabulary.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VocabularyForm
          vocabulary={vocabulary}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
