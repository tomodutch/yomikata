export const schema = gql`
  type Kanji {
    character: String!
    frequency: Int
    jlpt: Int
    meaning: String
    author: User!
    userId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    getKanji(jlpt: Int): [Kanji!]!
    findKanji(character: String!): Kanji!
  }
`
