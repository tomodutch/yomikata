import KanjiOverviewCell from 'src/components/KanjiOverviewCell/KanjiOverviewCell'
import { useState } from 'react'
import { Form, SelectField } from '@redwoodjs/forms'

const KanjiOverviewPage = () => {
  const [jlpt, setJlpt] = useState(0)

  return (
    <>
      <Form>
        <SelectField
          value={jlpt}
          onChange={(e) => {
            const value = parseInt(e.currentTarget.value)
            setJlpt(value)
          }}
        >
          <option value="0">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </SelectField>
      </Form>
      <KanjiOverviewCell jlpt={jlpt === 0 ? undefined : jlpt} />
    </>
  )
}

export default KanjiOverviewPage
