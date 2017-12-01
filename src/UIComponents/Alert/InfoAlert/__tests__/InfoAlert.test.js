import InfoAlert from '../InfoAlert'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<InfoAlert />, div)
})

test('info alert snapshot', () => {
  const tree = renderer.create(<InfoAlert />).toJSON()
  expect(tree).toMatchSnapshot()
})
