export const schema = gql`
  type User {
    id: String!
    handle: String!
    vocabulary: [Vocabulary]!
    kanji: [Kanji]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
