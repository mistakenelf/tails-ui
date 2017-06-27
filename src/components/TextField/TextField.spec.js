import React from 'react'
import TextField from './TextField'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<TextField />, div)
})

it('generate text field snapshot', () => {
  const component = renderer.create(<TextField />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
