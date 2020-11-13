export const schema = gql`
  type VocabularyKanji {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    Vocabulary: Vocabulary
    vocabularyId: String
    Kanji: Kanji
    kanjiCharacter: String
  }
`
