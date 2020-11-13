import { Form, Submit, TextField } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const Quiz = ({ vocabularies }) => {
  const randomWord = () =>
    vocabularies[Math.floor(Math.random() * vocabularies.length)]
  const [state, setState] = useState({ word: randomWord(), answer: null })
  const formMethods = useForm()
  const { word, answer } = state
  const isCorrect = state.answer === word?.Vocabulary?.furigana

  return (
    <main>
      <section>
        <Form
          formMethods={formMethods}
          onSubmit={({ answer: newAnswer }) => {
            if (answer === null) {
              setState({ ...state, answer: newAnswer })
            } else {
              setState({ ...state, answer: null, word: randomWord() })
            }

            formMethods.reset()
          }}
        >
          <h1>{word?.Vocabulary?.word}</h1>
          {answer && <h2>{word?.Vocabulary?.furigana}</h2>}
          <b>{answer && isCorrect && 'corrent!'}</b>
          {answer === null && <TextField name="answer" required autofocus />}
          <Submit>{answer === null ? 'answer' : 'next'}</Submit>
        </Form>
      </section>
    </main>
  )
}

export default Quiz
