export const schema = gql`
  type KanjiSentence {
    id: String!
    kanji: Kanji!
    sentence: Sentence!
    kanjiCharacter: String!
    sentenceId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
