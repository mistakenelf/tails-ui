import React from 'react'
import SecondaryButton from '../SecondaryButton'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SecondaryButton />, div)
})

test('secondary button snapshot', () => {
  const tree = renderer.create(<SecondaryButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
