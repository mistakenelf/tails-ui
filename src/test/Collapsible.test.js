import Collapsible from '../components/Collapsible'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Collapsible title="Collapsible">
      <div>Some content</div>
    </Collapsible>,
    div
  )
})

test('collapsible snapshot', () => {
  const tree = renderer
    .create(
      <Collapsible title="Collapsible">
        <div>Some content</div>
      </Collapsible>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
