import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/VocabulariesCell'

const DELETE_VOCABULARY_MUTATION = gql`
  mutation DeleteVocabularyMutation($id: String!) {
    deleteVocabulary(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const VocabulariesList = ({ vocabularies }) => {
  const { addMessage } = useFlash()
  const [deleteVocabulary] = useMutation(DELETE_VOCABULARY_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Word</th>
            <th>Furigana</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vocabularies.map((vocabulary) => (
            <tr key={vocabulary.id}>
              <td>{truncate(vocabulary.id)}</td>
              <td>{truncate(vocabulary.word)}</td>
              <td>{truncate(vocabulary.furigana)}</td>
              <td>{timeTag(vocabulary.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vocabulary({ id: vocabulary.id })}
                    title={'Show vocabulary ' + vocabulary.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVocabulary({ id: vocabulary.id })}
                    title={'Edit vocabulary ' + vocabulary.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete vocabulary ' + vocabulary.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vocabulary.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VocabulariesList
