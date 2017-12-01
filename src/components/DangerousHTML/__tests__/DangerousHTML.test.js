import DangerousHTML from '../DangerousHTML'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DangerousHTML />, div)
})

test('dangerous html snapshot', () => {
  const tree = renderer.create(<DangerousHTML />).toJSON()
  expect(tree).toMatchSnapshot()
})
