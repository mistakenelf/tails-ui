import Icon from './Icon'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Icon />, div)
})

it('generate icon snapshot', () => {
  const component = renderer.create(<Icon />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
