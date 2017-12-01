import DangerButton from '../DangerButton'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DangerButton />, div)
})

test('danger button snapshot', () => {
  const tree = renderer.create(<DangerButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
