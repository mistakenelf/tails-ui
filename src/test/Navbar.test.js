import Navbar from '../components/Navbar'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Navbar
      brand="Tails-UI"
      extra={
        <div>
          <a href="#!">Account</a>
          <div>Some Text</div>
        </div>
      }
    >
      <a href="#!">Home</a>
      <a href="#!">Products</a>
      <a href="#!">Cart</a>
      <a href="#!">Shop</a>
    </Navbar>,
    div
  )
})

test('navbar snapshot', () => {
  const tree = renderer
    .create(
      <Navbar
        brand="Tails-UI"
        extra={
          <div>
            <a href="#!">Account</a>
            <div>Some Text</div>
          </div>
        }
      >
        <a href="#!">Home</a>
        <a href="#!">Products</a>
        <a href="#!">Cart</a>
        <a href="#!">Shop</a>
      </Navbar>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
