import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders component', () => {
    const wrapper = render(<App />, { wrapper: MemoryRouter })

    expect(wrapper.getByText('React + Material UI Boilerplate')).toBeInTheDocument()
  })
})
