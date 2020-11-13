import { db } from 'src/lib/db'

export const sentences = () => {
  return db.sentence.findMany()
}

export const Sentence = {
  KanjiSentence: (_obj, { root }) =>
    db.sentence.findOne({ where: { id: root.id } }).KanjiSentence(),
  VocabularySentence: (_obj, { root }) =>
    db.sentence.findOne({ where: { id: root.id } }).VocabularySentence(),
}

export const findSentences = ({ character }) =>
  db.kanji
    .findOne({ where: { character } })
    .KanjiSentence({ take: 10, include: { sentence: true } })
