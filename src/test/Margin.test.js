import Margin from '../components/Margin/Margin'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Margin>Some Margin</Margin>, div)
})

test('margin snapshot', () => {
  const tree = renderer.create(<Margin>Some Margin</Margin>).toJSON()
  expect(tree).toMatchSnapshot()
})
