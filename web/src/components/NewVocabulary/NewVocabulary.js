import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import VocabularyForm from 'src/components/VocabularyForm'

import { QUERY } from 'src/components/VocabulariesCell'

const CREATE_VOCABULARY_MUTATION = gql`
  mutation CreateVocabularyMutation($input: CreateVocabularyInput!) {
    createVocabulary(input: $input) {
      id
    }
  }
`

const NewVocabulary = () => {
  const { addMessage } = useFlash()
  const [createVocabulary, { loading, error }] = useMutation(
    CREATE_VOCABULARY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.vocabularies())
        addMessage('Vocabulary created.', { classes: 'rw-flash-success' })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onSave = (input) => {
    createVocabulary({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Vocabulary</h2>
      </header>
      <div className="rw-segment-main">
        <VocabularyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVocabulary
