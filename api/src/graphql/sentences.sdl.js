export const schema = gql`
  type Sentence {
    id: String!
    sentence: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findSentences(character: String!): [KanjiSentence!]!
  }
`
