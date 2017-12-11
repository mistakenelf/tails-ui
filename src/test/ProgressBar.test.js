import ProgressBar from '../components/ProgressBar'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ProgressBar percent="50%" />, div)
})

test('progress bar snapshot', () => {
  const tree = renderer.create(<ProgressBar percent="50%" />).toJSON()
  expect(tree).toMatchSnapshot()
})
