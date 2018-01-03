import Checkbox from '../components/Checkbox/Checkbox'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Checkbox />, div)
})

test('checkbox snapshot', () => {
  const tree = renderer.create(<Checkbox />).toJSON()
  expect(tree).toMatchSnapshot()
})
