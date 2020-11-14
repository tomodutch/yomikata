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

  const next = () => {
    setState({ ...state, answer: null, word: randomWord() })
  }

  return (
    <Form
      formMethods={formMethods}
      onSubmit={({ answer: newAnswer }) => {
        if (answer === null) {
          setState({ ...state, answer: newAnswer })
        } else {
          next()
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
              <B.Heading
                subtitle
                size={3}
                className={answer ? '' : 'inivisble'}
              >
                {word?.Vocabulary?.furigana}
              </B.Heading>
              <B.Button
                onClick={(_) => {
                  if (answer) {
                    next()
                  } else {
                    setState({ ...state, answer: 'Skip' })
                  }
                }}
                color="info"
                type="button"
              >
                {answer ? 'next' : 'show'}
              </B.Button>
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
