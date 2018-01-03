import React from 'react'
import TextField from '../components/TextField/TextField'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<TextField />, div)
})

test('text field snapshot', () => {
  const tree = renderer.create(<TextField />).toJSON()
  expect(tree).toMatchSnapshot()
})
