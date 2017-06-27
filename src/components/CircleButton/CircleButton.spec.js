import CircleButton from './CircleButton'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<CircleButton />, div)
})

it('generate CircleButton snapshot', () => {
  const component = renderer.create(<CircleButton />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
