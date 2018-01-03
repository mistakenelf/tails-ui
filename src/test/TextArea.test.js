import React from 'react'
import TextArea from '../components/TextArea/TextArea'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<TextArea />, div)
})

test('text area snapshot', () => {
  const tree = renderer.create(<TextArea />).toJSON()
  expect(tree).toMatchSnapshot()
})
