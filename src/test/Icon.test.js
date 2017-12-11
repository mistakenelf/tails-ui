import Icon from '../components/Icon'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Icon name="fas fa-audio-description" />, div)
})

test('icon snapshot', () => {
  const tree = renderer
    .create(<Icon name="fas fa-audio-description" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
