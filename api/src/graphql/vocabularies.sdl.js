export const schema = gql`
  type Vocabulary {
    id: String!
    word: String!
    furigana: String!
    jlpt: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findVocabularies(character: String!): [VocabularyKanji!]!
  }
`
