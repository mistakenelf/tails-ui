import Radio from '../components/Radio'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Radio />, div)
})

test('radio snapshot', () => {
  const tree = renderer.create(<Radio />).toJSON()
  expect(tree).toMatchSnapshot()
})
