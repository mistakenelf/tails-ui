import React from 'react'
import Text from '../components/Text/Text'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Text>some text</Text>, div)
})

test('text snapshot', () => {
  const tree = renderer.create(<Text>some text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})
