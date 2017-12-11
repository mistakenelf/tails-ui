import Alert from '../components/Alert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Alert message="This is a message" />, div)
})

test('alert snapshot', () => {
  const tree = renderer.create(<Alert message="This is a message" />).toJSON()
  expect(tree).toMatchSnapshot()
})
