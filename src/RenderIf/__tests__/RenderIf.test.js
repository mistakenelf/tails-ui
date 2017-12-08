import React from 'react'
import RenderIf from '../RenderIf'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<RenderIf condition={1 === 1}>Will this render?</RenderIf>, div)
})

test('render if snapshot', () => {
  const tree = renderer
    .create(<RenderIf condition={1 === 1}>Will this render?</RenderIf>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
