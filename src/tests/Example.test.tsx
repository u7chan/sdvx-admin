import { FC } from 'react'
import { render, screen } from '@testing-library/react'

const ExampleComponent: FC = () => <p>Hello Test</p>

describe('ExampleTest', () => {
  it('case 1', () => {
    render(<ExampleComponent />)
    expect(screen.getByText('Hello Test')).toBeInTheDocument()
  })
})
