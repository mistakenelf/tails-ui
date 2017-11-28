import React from 'react'
import SuccessAlert from '../SuccessAlert'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<SuccessAlert />, div)
})

test('success alert snapshot', () => {
  const tree = renderer.create(<SuccessAlert />).toJSON()
  expect(tree).toMatchSnapshot()
})
