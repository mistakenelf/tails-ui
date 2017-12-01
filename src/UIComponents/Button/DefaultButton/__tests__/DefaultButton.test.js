import DefaultButton from '../DefaultButton'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DefaultButton />, div)
})

test('default button snapshot', () => {
  const tree = renderer.create(<DefaultButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
