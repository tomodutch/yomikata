import MarketingLayoutLayout from 'src/layouts/MarketingLayoutLayout/MarketingLayoutLayout'
import * as B from 'react-bulma-components'
import KanjiOverviewCell from 'src/components/KanjiOverviewCell/KanjiOverviewCell'
import JlptSelect from 'src/components/JlptSelect/JlptSelect'
import { useState } from 'react'

const HomePage = () => {
  const [jlpt, setJlpt] = useState(5)

  return (
    <MarketingLayoutLayout>
      <B.Hero color="info" size="fullheight">
        <B.Hero.Body>
          <B.Container>
            <B.Section className="has-text-centered">
              <B.Heading size={1}>読み方</B.Heading>
              <B.Heading subtitle size={4}>
                Improve reading ability through drills
              </B.Heading>
              <JlptSelect onChange={setJlpt} />
              <KanjiOverviewCell jlpt={jlpt} />
            </B.Section>
          </B.Container>
        </B.Hero.Body>
      </B.Hero>
    </MarketingLayoutLayout>
  )
}

export default HomePage
