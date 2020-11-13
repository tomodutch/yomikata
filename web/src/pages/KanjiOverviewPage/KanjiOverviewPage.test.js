import { render } from '@redwoodjs/testing'

import KanjiOverviewPage from './KanjiOverviewPage'

describe('KanjiOverviewPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KanjiOverviewPage />)
    }).not.toThrow()
  })
})
