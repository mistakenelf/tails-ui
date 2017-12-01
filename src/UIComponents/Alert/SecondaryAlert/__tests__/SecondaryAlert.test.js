import React from 'react'
import SecondaryAlert from '../SecondaryAlert'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SecondaryAlert />, div)
})

test('secondary alert snapshot', () => {
  const tree = renderer.create(<SecondaryAlert />).toJSON()
  expect(tree).toMatchSnapshot()
})
