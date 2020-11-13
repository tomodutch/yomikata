import { db } from 'src/lib/db'

export const findKanji = ({ character }) =>
  db.kanji.findOne({ where: { character } })

export const getKanji = ({ jlpt }) => {
  const where = {}
  if (jlpt !== null) {
    where.jlpt = jlpt
  }

  return db.kanji.findMany({
    take: 1000,
    where,
    orderBy: {
      frequency: 'asc',
    },
  })
}
