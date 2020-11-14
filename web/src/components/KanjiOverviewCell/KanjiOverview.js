import * as B from 'react-bulma-components'
import { routes, navigate } from '@redwoodjs/router'

export const KanjiOverview = ({ kanji }) => {
  const chunks = chunk(kanji, 6)
  return (
    <B.Container>
      <B.Section>
        <div className="table-container kanji-overview-table">
          <B.Table className="is-bordered">
            <tbody>
              {chunks.map((chunk, key) => (
                <tr key={key}>
                  {chunk.map((kanji) => (
                    <td
                      key={kanji.character}
                      onClick={(_) => {
                        navigate(
                          routes.quizPage({
                            character: kanji.character,
                          })
                        )
                      }}
                      className="has-text-centered is-size-4"
                    >
                      {kanji.character}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </B.Table>
        </div>
      </B.Section>
    </B.Container>
  )
}

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

export default KanjiOverview
