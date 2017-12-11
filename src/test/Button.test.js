import Button from '../components/Button'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Button>Button</Button>, div)
})

test('button snapshot', () => {
  const tree = renderer.create(<Button>Button</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
