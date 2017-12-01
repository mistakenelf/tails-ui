import Alert from '../Alert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Alert />, div)
})

test('alert snapshot', () => {
  const tree = renderer.create(<Alert />).toJSON()
  expect(tree).toMatchSnapshot()
})
