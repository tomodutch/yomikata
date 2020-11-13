import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/VocabulariesCell'

const DELETE_VOCABULARY_MUTATION = gql`
  mutation DeleteVocabularyMutation($id: String!) {
    deleteVocabulary(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Vocabulary = ({ vocabulary }) => {
  const { addMessage } = useFlash()
  const [deleteVocabulary] = useMutation(DELETE_VOCABULARY_MUTATION, {
    onCompleted: () => {
      navigate(routes.vocabularies())
      addMessage('Vocabulary deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vocabulary ' + id + '?')) {
      deleteVocabulary({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vocabulary {vocabulary.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vocabulary.id}</td>
            </tr>
            <tr>
              <th>Word</th>
              <td>{vocabulary.word}</td>
            </tr>
            <tr>
              <th>Furigana</th>
              <td>{vocabulary.furigana}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(vocabulary.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVocabulary({ id: vocabulary.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vocabulary.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Vocabulary
