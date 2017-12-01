import PrimaryAlert from '../PrimaryAlert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<PrimaryAlert />, div)
})

test('primary alert snapshot', () => {
  const tree = renderer.create(<PrimaryAlert />).toJSON()
  expect(tree).toMatchSnapshot()
})
