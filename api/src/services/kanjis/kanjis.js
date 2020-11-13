import { db } from 'src/lib/db'

export const findKanji = ({ character }) =>
  db.kanji.findOne({ where: { character } })
