import React from 'react'
import SuccessButton from '../SuccessButton'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SuccessButton />, div)
})

test('success button snapshot', () => {
  const tree = renderer.create(<SuccessButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
