export const schema = gql`
  type Vocabulary {
    id: String!
    word: String!
    furigana: String!
    createdAt: DateTime!
  }

  type Query {
    vocabularies: [Vocabulary!]!
    vocabulary(id: String!): Vocabulary
  }

  input CreateVocabularyInput {
    word: String!
    furigana: String!
  }

  input UpdateVocabularyInput {
    word: String
    furigana: String
  }

  type Mutation {
    createVocabulary(input: CreateVocabularyInput!): Vocabulary!
    updateVocabulary(id: String!, input: UpdateVocabularyInput!): Vocabulary!
    deleteVocabulary(id: String!): Vocabulary!
  }
`
