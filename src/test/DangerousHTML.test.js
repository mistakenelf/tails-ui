import DangerousHTML from '../components/DangerousHTML'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DangerousHTML>First &middot; Second</DangerousHTML>, div)
})

test('dangerous html snapshot', () => {
  const tree = renderer
    .create(<DangerousHTML>First &middot; Second</DangerousHTML>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
