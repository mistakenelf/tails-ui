import ProgressBar from '../ProgressBar'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ProgressBar />, div)
})

test('progress bar snapshot', () => {
  const tree = renderer.create(<ProgressBar />).toJSON()
  expect(tree).toMatchSnapshot()
})
