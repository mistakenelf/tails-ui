import Card from './Card'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Card />, div)
})

it('generate card snapshot', () => {
  const component = renderer.create(<Card />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
