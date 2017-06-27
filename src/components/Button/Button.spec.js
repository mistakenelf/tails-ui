import Button from './Button'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Button />, div)
})

it('generate button snapshot', () => {
  const component = renderer.create(<Button />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
