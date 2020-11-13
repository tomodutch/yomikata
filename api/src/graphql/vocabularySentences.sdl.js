export const schema = gql`
  type VocabularySentence {
    id: String!
    vocabulary: Vocabulary!
    vocabularyId: String!
    sentence: Sentence!
    sentenceId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
