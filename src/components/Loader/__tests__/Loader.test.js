import Loader from '../Loader'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Loader />, div)
})

test('loader snapshot', () => {
  const tree = renderer.create(<Loader />).toJSON()
  expect(tree).toMatchSnapshot()
})
