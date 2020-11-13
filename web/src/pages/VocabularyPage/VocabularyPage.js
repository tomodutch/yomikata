import VocabulariesLayout from 'src/layouts/VocabulariesLayout'
import VocabularyCell from 'src/components/VocabularyCell'

const VocabularyPage = ({ id }) => {
  return (
    <VocabulariesLayout>
      <VocabularyCell id={id} />
    </VocabulariesLayout>
  )
}

export default VocabularyPage
