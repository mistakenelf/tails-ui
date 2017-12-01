import CodeBlock from '../CodeBlock'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<CodeBlock />, div)
})

test('codeblock snapshot', () => {
  const tree = renderer.create(<CodeBlock />).toJSON()
  expect(tree).toMatchSnapshot()
})
