import Padding from '../components/Padding/Padding'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Padding>Some Padding</Padding>, div)
})

test('padding snapshot', () => {
  const tree = renderer.create(<Padding>Some Padding</Padding>).toJSON()
  expect(tree).toMatchSnapshot()
})
