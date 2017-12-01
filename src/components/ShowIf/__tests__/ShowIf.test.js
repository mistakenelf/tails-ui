import React from 'react'
import ShowIf from '../ShowIf'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ShowIf />, div)
})

test('showif snapshot', () => {
  const tree = renderer.create(<ShowIf />).toJSON()
  expect(tree).toMatchSnapshot()
})
