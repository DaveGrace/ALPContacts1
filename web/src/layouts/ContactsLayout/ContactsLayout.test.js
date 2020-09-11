import { render } from '@redwoodjs/testing'

import ContactsLayout from './ContactsLayout'

describe('ContactsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactsLayout />)
    }).not.toThrow()
  })
})
