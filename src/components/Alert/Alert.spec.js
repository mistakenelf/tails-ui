import Alert from './Alert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Alert />, div)
})

it('generate alert snapshot', () => {
  const component = renderer.create(<Alert />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
