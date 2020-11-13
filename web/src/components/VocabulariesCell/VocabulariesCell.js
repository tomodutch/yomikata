import { Link, routes } from '@redwoodjs/router'

import Vocabularies from 'src/components/Vocabularies'

export const QUERY = gql`
  query VOCABULARIES {
    vocabularies {
      id
      word
      furigana
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vocabularies yet. '}
      <Link to={routes.newVocabulary()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ vocabularies }) => {
  return <Vocabularies vocabularies={vocabularies} />
}
