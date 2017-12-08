import Modal from '../Modal'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Modal />, div)
})

test('modal snapshot', () => {
  const tree = renderer.create(<Modal />).toJSON()
  expect(tree).toMatchSnapshot()
})
