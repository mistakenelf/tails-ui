import React from 'react'
import TextArea from './TextArea'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<TextArea />, div)
})

it('generate text area snapshot', () => {
  const component = renderer.create(<TextArea />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
