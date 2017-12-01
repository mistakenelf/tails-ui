import DefaultAlert from '../DefaultAlert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DefaultAlert />, div)
})

test('default alert snapshot', () => {
  const tree = renderer.create(<DefaultAlert />).toJSON()
  expect(tree).toMatchSnapshot()
})
