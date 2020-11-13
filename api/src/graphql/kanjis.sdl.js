export const schema = gql`
  type Kanji {
    character: String!
    jlpt: Int!
    author: User!
    userId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findKanji(character: String!): Kanji!
  }
`
