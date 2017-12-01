import PrimaryButton from '../PrimaryButton'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<PrimaryButton />, div)
})

test('primary button snapshot', () => {
  const tree = renderer.create(<PrimaryButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
