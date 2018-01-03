import Panel from '../components/Panel/Panel'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Panel title="A Panel">A panel</Panel>, div)
})

test('panel snapshot', () => {
  const tree = renderer.create(<Panel title="A Panel">A panel</Panel>).toJSON()
  expect(tree).toMatchSnapshot()
})
