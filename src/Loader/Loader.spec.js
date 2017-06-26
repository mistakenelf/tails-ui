import Loader from './Loader'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Loader />, div)
})

it('generate loader snapshot', () => {
  const component = renderer.create(<Loader />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
