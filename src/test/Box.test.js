import Box from '../components/Box/Box'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Box>This is a box</Box>, div)
})

test('box snapshot', () => {
  const tree = renderer.create(<Box>This is a box</Box>).toJSON()
  expect(tree).toMatchSnapshot()
})
