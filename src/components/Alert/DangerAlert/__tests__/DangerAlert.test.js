import DangerAlert from '../DangerAlert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DangerAlert />, div)
})

test('danger alert snapshot', () => {
  const tree = renderer.create(<DangerAlert />).toJSON()
  expect(tree).toMatchSnapshot()
})
