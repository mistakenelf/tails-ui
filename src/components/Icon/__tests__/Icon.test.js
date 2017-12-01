import Icon from '../Icon'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Icon />, div)
})

test('icon snapshot', () => {
  const tree = renderer.create(<Icon />).toJSON()
  expect(tree).toMatchSnapshot()
})
