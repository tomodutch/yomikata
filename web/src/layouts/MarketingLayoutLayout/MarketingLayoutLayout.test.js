import { render } from '@redwoodjs/testing'

import MarketingLayoutLayout from './MarketingLayoutLayout'

describe('MarketingLayoutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarketingLayoutLayout />)
    }).not.toThrow()
  })
})
