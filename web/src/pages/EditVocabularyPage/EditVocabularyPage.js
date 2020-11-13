import VocabulariesLayout from 'src/layouts/VocabulariesLayout'
import EditVocabularyCell from 'src/components/EditVocabularyCell'

const EditVocabularyPage = ({ id }) => {
  return (
    <VocabulariesLayout>
      <EditVocabularyCell id={id} />
    </VocabulariesLayout>
  )
}

export default EditVocabularyPage
