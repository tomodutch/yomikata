import { db } from 'src/lib/db'

export const findVocabularies = ({ character }) =>
  db.vocabularyKanji.findMany({
    take: 100,
    where: { kanjiCharacter: character },
    include: { Vocabulary: true },
  })
