import Modal from './Modal'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Modal />, div)
})

it('generate modal snapshot', () => {
  const component = renderer.create(<Modal />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
