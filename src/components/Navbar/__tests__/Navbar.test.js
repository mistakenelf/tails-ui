import Navbar from '../Navbar'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Navbar brand="Tails-UI">
      <a href="#!">Home</a>
      <a href="#!">Home</a>
      <a href="#!">Home</a>
      <a href="#!">Home</a>
    </Navbar>,
    div
  )
})

test('navbar snapshot', () => {
  const tree = renderer
    .create(
      <Navbar brand="Tails-UI">
        <a href="#!">Home</a>
        <a href="#!">Home</a>
        <a href="#!">Home</a>
        <a href="#!">Home</a>
      </Navbar>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
