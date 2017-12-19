import Popover from '../components/Popover'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Popover title="A Panel">A popover</Popover>, div)
})

test('popover snapshot', () => {
  const tree = renderer.create(<Popover>A popover</Popover>).toJSON()
  expect(tree).toMatchSnapshot()
})
