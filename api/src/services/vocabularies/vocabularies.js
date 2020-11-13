import { db } from 'src/lib/db'

export const vocabularies = () => {
  return db.vocabulary.findMany()
}

export const vocabulary = ({ id }) => {
  return db.vocabulary.findOne({
    where: { id },
  })
}

export const createVocabulary = ({ input }) => {
  return db.vocabulary.create({
    data: input,
  })
}

export const updateVocabulary = ({ id, input }) => {
  return db.vocabulary.update({
    data: input,
    where: { id },
  })
}

export const deleteVocabulary = ({ id }) => {
  return db.vocabulary.delete({
    where: { id },
  })
}
