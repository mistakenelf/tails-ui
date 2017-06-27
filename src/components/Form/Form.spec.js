import Form from './Form'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Form />, div)
})

it('generate from snapshot', () => {
  const component = renderer.create(<Form />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
