import { routes, Link } from '@redwoodjs/router'
import { Form, TextField } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as B from 'react-bulma-components'

export const Quiz = ({ vocabularies }) => {
  const randomWord = () =>
    vocabularies[Math.floor(Math.random() * vocabularies.length)]
  const [state, setState] = useState({ word: randomWord(), answer: null })
  const formMethods = useForm()
  const { word, answer } = state
  // const isCorrect = state.answer === word?.Vocabulary?.furigana

  return (
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
      <B.Hero color="info" size="fullheight">
        <B.Hero.Head>
          <B.Container>
            <B.Section>
              <B.Button
                inverted={true}
                color="info"
                outlined={true}
                renderAs={Link}
                to={routes.home()}
              >
                Back
              </B.Button>
            </B.Section>
          </B.Container>
        </B.Hero.Head>
        <B.Hero.Body>
          <B.Container>
            <B.Section className="has-text-centered">
              <B.Heading size={1}>{word?.Vocabulary?.word}</B.Heading>
              {answer && (
                <B.Heading subtitle size={3}>
                  {word?.Vocabulary?.furigana}
                </B.Heading>
              )}
            </B.Section>
          </B.Container>
        </B.Hero.Body>
        <B.Hero.Footer>
          <B.Container>
            <B.Section>
              <TextField
                autoFocus={true}
                className="input is-large"
                name="answer"
              />
            </B.Section>
          </B.Container>
        </B.Hero.Footer>
      </B.Hero>
    </Form>
  )
}

export default Quiz
